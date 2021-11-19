import { Component } from "react";

import NavBar from '../../components/NavBar/NavBar'
// import UserProfile from '../../components/UserProfile/UserProfile' // unused for now
import GreetingBar from '../../components/GreetingBar/GreetingBar'
import WeeklyProgress from '../../components/WeeklyProgress/WeeklyProgress'
import HabitCard from '../../components/HabitCard/HabitCard'
import EmotionCard from '../../components/EmotionCard/EmotionCard'
import UserProfile from '../../components/UserProfile/UserProfile'


export default class HomePage extends Component {
	state = {
		currentUser: this.props.user.name,
		currentDate: null,
		showUserProfile: false,
		weekStartDate: null,
		weekEndDate: null,
		weeklyMood: [{M: 0}, {Tu: 0}, {W: 0}, {Th: 0}, {F: 0}, {Sa: 0}, {Su: 0}],
		currentMood: 0,
		emotionBackgroundDefault: 'rounded-2xl px-4',
		emotionBackgroundCustom: 'bg-white',
		emotionTitleText: 'How is your day going?',
		emotionSubtitleText: 'Hope you have a wonderful day!',
		emotionCardCollapse: false,
		waterProgress:2000,
		habitValues: [
			{
				name: "Water",
				goal: 4000, // in mL
				incr: 100,
				habitMsg: "Let's get drinking!",
				unit: 'mL',
				presets: [
					{
						name: 'Cup',
						valueText: '250 mL',
						value: 250
					},
					{
						name: 'Bottle',
						valueText: '500 mL',
						value: 500
					}
				]
			},
			{
				name: "Exercise",
				goal: 30, // in minutes
				incr: 10,
				habitMsg: "Keep on moving!",
				unit: 'min',
				presets: [
					{
						valueText: '15 mins',
						value: 15
					},
					{
						valueText: '30 mins',
						value: 30
					},
					{
						valueText: '1 hour',
						value: 60
					},
					{
						valueText: '2 hours',
						value: 120
					}
				]
			},
			{
				name: "Sleep",
				goal: 480, // 8 hrs x 60 min = 480 min
				habitMsg: "Rest is the best medicine.",
				unit: 'min',
				presets: [
					{name: 'Sleep time'},
					{name: 'Wake up time'}
				]
			}
		]
	}


	handleUserProfile = () => {
		this.setState({showUserProfile: !this.state.showUserProfile})
	}

	//below is to fetch request for habit data from different day
	// and display it when user chooses it via date picker.
	// or maybe this can be part of datepicker function. (date picking + grab+ inject new data)
	// fetchWeeklyProgress = () => {
	// 	this.setState({ data: "certain day's data" })
	// }

	handleEmotionClick = (currentMood) => {
		let emotionVariables = {}
		if (currentMood === 1) {
			emotionVariables = {
				emotionCardCollapse: false,
				emotionBackgroundCustom: 'bg-red-700 text-white',
				emotionTitleText: 'Bad Day?',
				emotionSubtitleText: 'Has your day gotten better?'
			}
		} else if (currentMood === 2) {
			emotionVariables = {
				emotionCardCollapse: false,
				emotionBackgroundCustom: 'bg-yellow-500 text-white',
				emotionTitleText: 'Meh Day?',
				emotionSubtitleText: 'Has your day changed?'
			}
		} else if (currentMood === 3) {
			emotionVariables = {
				emotionCardCollapse: false,
				emotionBackgroundCustom: 'bg-green-800 text-white',
				emotionTitleText: 'Good Day?',
				emotionSubtitleText: 'Keep it up!'
			}
		}
		this.setState(emotionVariables)
		this.updateMood(currentMood)
	}

	handleEmotionCollapse = () => {
		let collapse = this.state.emotionCardCollapse
		collapse = !collapse
		this.setState({emotionCardCollapse: collapse})
	}

	fetchWeeklyMood = async (startDate, endDate) => {
		try {
			let fetchResponse = await fetch(`/api/userInputs/${this.props.user._id}/weeklyMood`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
					weekStartDate: startDate,
					weekEndDate: endDate
           		})
			})
			let weeklyMood = await fetchResponse.json()
			return weeklyMood
		} catch (err) {
			console.error('Error:', err)
		}
	}

	updateMood = async (currentMood) => {
		try {
			let fetchResponse = await fetch(`/api/userInputs/${this.props.user._id}/mood`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
					userId: this.props.user._id,
                    date: this.state.currentDate,
					inputName: "mood",
					inputValue: currentMood
                })
			})
            let serverResponse = await fetchResponse.json()
			console.log("Success: ", serverResponse)
			
			let weekDates = this.getWeekDates(this.state.currentDate)
			let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
			this.setState({weeklyMood: weeklyMood, currentMood: currentMood})

        } catch (err) {
			console.error('Error:', err)
        }
	}

	getTodaysMood = (date, weeklyMood) => {
		let formattedDate = new Date(date)
		let dayWeek = formattedDate.getDay()
		let currentMoodObj = weeklyMood[dayWeek]
		let currentMoodValue = Object.entries(currentMoodObj)[0][1]
		return currentMoodValue
	}
	
	getTodaysDate = () => {
		let todaysDate = new Date().toISOString().slice(0, 10)
		return todaysDate
	}

	getWeekDates = (date) => {
		let formattedDate = new Date(date)
		let dayWeek = formattedDate.getDay() + 1 // adjust for EST vs GMT discrepancy

		let daysBackward = 0
		let daysForward = 0
		if (dayWeek === 1) {daysForward = 6; daysBackward = 0}
		if (dayWeek === 2) {daysForward = 5; daysBackward = 1}
		if (dayWeek === 3) {daysForward = 4; daysBackward = 2}
		if (dayWeek === 4) {daysForward = 3; daysBackward = 3}
		if (dayWeek === 5) {daysForward = 2; daysBackward = 4}
		if (dayWeek === 6) {daysForward = 1; daysBackward = 5}
		if (dayWeek === 7) {daysForward = 0; daysBackward = 6}
	
		let startDate = new Date(date)
		startDate.setDate(startDate.getDate() - daysBackward)
		let startDateString = startDate.toISOString().slice(0, 10)
		
		let endDate = new Date(date)
		endDate.setDate(endDate.getDate() + daysForward)
		let endDateString = endDate.toISOString().slice(0, 10)

		return [startDateString, endDateString]
	}
		
	selectDate = async (dateSelected) => {
		let weekDates = this.getWeekDates(dateSelected)
		let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
		let currentMood = this.getTodaysMood(dateSelected, weeklyMood)
		let emotionVariables = this.setEmotionVariables(currentMood)
		this.setState({
			currentDate: dateSelected, 
			weekStartDate: weekDates[0], 
			weekEndDate: weekDates[1], 
			weeklyMood: weeklyMood, 
			currentMood: currentMood,
			emotionBackgroundCustom: emotionVariables['emotionBackgroundCustom'],
			emotionTitleText: emotionVariables['emotionTitleText'],
			emotionSubtitleText: emotionVariables['emotionSubtitleText']
		})
	}

	setEmotionVariables = (mood) => {
		let emotionVariables = {}
		if (mood === 1) {
			emotionVariables = {
				'emotionBackgroundCustom': 'bg-red-700 text-white',
				'emotionTitleText': 'Bad Day?',
				'emotionSubtitleText': 'Has your day gotten better?'
			}
		} else if (mood === 2) {
			emotionVariables = {
				'emotionBackgroundCustom': 'bg-yellow-500 text-white',
				'emotionTitleText': 'Meh Day?',
				'emotionSubtitleText': 'Has your day changed?'
			}
		} else if (mood === 3) {
			emotionVariables = {
				'emotionBackgroundCustom': 'bg-green-800 text-white',
				'emotionTitleText': 'Good Day?',
				'emotionSubtitleText': 'Keep it up!'
			}
		} else {
			emotionVariables = {
				'emotionBackgroundCustom': 'bg-white',
				'emotionTitleText': 'How is your day going?',
				'emotionSubtitleText': 'Hope you have a wonderful day!'
			}
		}
		return emotionVariables
	}

	async componentDidMount () {
		let todaysDate = this.getTodaysDate()
		let weekDates = this.getWeekDates(todaysDate)
		let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
		let currentMood = this.getTodaysMood(todaysDate, weeklyMood)
		let emotionVariables = this.setEmotionVariables(currentMood)
		this.setState({
			currentDate: todaysDate, 
			weekStartDate: weekDates[0], 
			weekEndDate: weekDates[1], 
			weeklyMood: weeklyMood, 
			currentMood: currentMood, 
			emotionBackgroundCustom: emotionVariables['emotionBackgroundCustom'],
			emotionTitleText: emotionVariables['emotionTitleText'],
			emotionSubtitleText: emotionVariables['emotionSubtitleText']
		})
	}
	
	render() {
		return (
			<div id="HomePage" className="">
				<div className="container">
					<NavBar  handleUserProfile={this.handleUserProfile}/>
					{this.state.showUserProfile
						?
						<UserProfile habitValues={this.state.habitValues} logOutUser={this.props.logOutUser}/>
						:
						<div id="emptyUserProfile"></div>
					}
					<GreetingBar currentUser={this.state.currentUser} currentDate={this.state.currentDate} selectDate={this.selectDate} />
					<WeeklyProgress weeklyProgress={this.state.weeklyMood} />
					<EmotionCard handleClick={this.handleEmotionClick} backgroundDefault={this.state.emotionBackgroundDefault} backgroundCustom={this.state.emotionBackgroundCustom} titleText={this.state.emotionTitleText} subtitleText={this.state.emotionSubtitleText} collapse={this.state.emotionCardCollapse} handleCollapse={this.handleEmotionCollapse}/>
					<HabitCard waterProgress={this.state.waterProgress} habitValues={this.state.habitValues[0]} />
				</div>
			</div>
		)
	}
}