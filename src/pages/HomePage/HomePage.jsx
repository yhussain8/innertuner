import { Component } from "react";

import NavBar from '../../components/NavBar/NavBar'
// import UserProfile from '../../components/UserProfile/UserProfile' // unused for now
import GreetingBar from '../../components/GreetingBar/GreetingBar'
import WeeklyProgress from '../../components/WeeklyProgress/WeeklyProgress'
import HabitCard from '../../components/HabitCard/HabitCard'
import EmotionCard from '../../components/EmotionCard/EmotionCard'

export default class HomePage extends Component {
	state = {
		currentUser: this.props.user.name,
		currentDate: null,
		weeklyMood: [
			{M: 1}, 
			{Tu: 2}, 
			{W: 2}, 
			{Th: 2}, 
			{F: 3}, 
			{Sa: 3}, 
			{Su: 3}
		],
		todayMood: "",
		waterProgress:2000,
		habitValues: [
			{
				name: "water",
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
				name: "exercise",
				goal: 30, // in minutes
				incr: 10,
				habitMsg: "Keep on Moving!",
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
				name: "sleep",
				goal: 480, // 8 hrs x 60 min = 480 min
				habitMsg: "Rest is the best medicine.",
				unit: 'min',
				presets: [
					{name: 'Sleep time'},
					{name: 'Wake up time'}
				]
			}
		],
		currentMood: "",
		// water: { title: "water", userGoal: "" },
		// // or water: {title:"water", userGoal: "", todayTotal: "", custinc:"", stdinc=""},
		// sleep: { title: "sleep", userGoal: "" },
		// exercise: { title: "exercise", userGoal: "" },
	}

	//below is to fetch request for habit data from different day
	// and display it when user chooses it via date picker.
	// or maybe this can be part of datepicker function. (date picking + grab+ inject new data)
	fetchWeeklyProgress = () => {
		this.setState({ data: "certain day's data" })
	}

	//this is to update today's mood once user selects the mood from null.
	// probably an if statment? ex) if smiley chosen -> set state
	// also send a request to save in DB
	updateMood = async (e) => {
		e.preventDefault()
		try {
			let fetchResponse = await fetch('/api/users/mood', {
				method: "POST",
				headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    userID: this.props.user._id,
                    date: this.state.currentDate,
					inputName: "mood",
					inputValue: e.target.value
                })
			})
            let serverResponse = await fetchResponse.json()
			console.log("Success: ", serverResponse)
			this.setState({ todayMood: e.target.value })
        } catch (err) {
			console.error('ERROR:', err)
        }
	}
	
	selectDate = (date) => {
		this.setState({currentDate: date});
	}
	
	getTodaysDate = () => {
		let todaysDate = new Date().toISOString().slice(0, 10)
		return todaysDate
	}
	
	componentDidMount() {
		this.setState({currentDate: this.getTodaysDate()})
	}
	
	// we should fetch all 3 habit data and smilley face here.
	// and pass it to each component.
	render() {
		return (
			<div id="HomePage" className="border border-black">
				<NavBar logOutUser={this.props.logOutUser} />
				<GreetingBar currentUser={this.state.currentUser} currentDate={this.state.currentDate} selectDate={this.selectDate} />
				<WeeklyProgress weeklyProgress={this.state.weeklyMood} />
				<EmotionCard updateMood={this.updateMood} todayMood={this.state.todayMood} />
				<HabitCard waterProgress={this.state.waterProgress} currentMood={this.state.currentMood} habitValues={this.state.habitValues[0]} />
				<HabitCard currentMood={this.state.currentMood} habitValues={this.state.habitValues[1]} />
				<HabitCard currentMood={this.state.currentMood} habitValues={this.state.habitValues[2]} />
				{/* What is water= for?  */}
				{/* <HabitCard water={this.state.water} currentMood={this.state.currentMood} habitValues={this.state.habitValues[0]} /> */}
			</div>
		)
	}
}