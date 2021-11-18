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
		weeklyMood: [],
		emotionCardHasInput: false,
		currentMood: null,
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
			console.log('FETCH RESPONSE', weeklyMood)
			return weeklyMood
		} catch (err) {
			console.error('Error:', err)
		}
	}

	updateMood = async (event, mood) => {
		event.preventDefault()
		try {
			let fetchResponse = await fetch(`/api/userInputs/${this.props.user._id}/mood`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
					userId: this.props.user._id,
                    date: this.state.currentDate,
					inputName: "mood",
					inputValue: mood
                })
			})
            let serverResponse = await fetchResponse.json()
			console.log("Success: ", serverResponse)
			
			let weekDates = this.getWeekDates(this.state.currentDate)
			let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
			this.setState({weeklyMood: weeklyMood})

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
		
	selectDate = async (date) => {
		let weekDates = this.getWeekDates(date)
		let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
		let mood = this.getTodaysMood(date, weeklyMood)
		this.setState({currentDate: date, weekStartDate: weekDates[0], weekEndDate: weekDates[1], weeklyMood: weeklyMood, currentMood: mood})
	}

	async componentDidMount () {
		let todaysDate = this.getTodaysDate()
		let weekDates = this.getWeekDates(todaysDate)
		let weeklyMood = await this.fetchWeeklyMood(weekDates[0], weekDates[1])
		let mood = this.getTodaysMood(todaysDate, weeklyMood)
		this.setState({currentDate: todaysDate, weekStartDate: weekDates[0], weekEndDate: weekDates[1], weeklyMood: weeklyMood, currentMood: mood})
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
					<EmotionCard currentMood={this.state.currentMood} updateMood={this.updateMood}/>
					<HabitCard waterProgress={this.state.waterProgress} habitValues={this.state.habitValues[0]} />
					{/* <HabitCard habitValues={this.state.habitValues[1]} /> */}
					{/* <HabitCard habitValues={this.state.habitValues[2]} /> */}
				</div>
			</div>
		)
	}
}