import React, { Component } from 'react'

import SaveButton from '../../components/SaveButton/SaveButton'
import LogOutButton from '../../components/LogOutButton/LogOutButton'


//=> maybe have a simple page of “how to” for the app and we can tell them too go to user profile page to add their goals as first step.

// Let's simplify the scenairo that user has to use all 3 habits.
// Here in user profile, user will change the goal and increments.
// should we ask the desinger for a quick layout for this?

// preferably I want to have habit setting as components.
//but the habitvalue stst comes from home page, can we send that to another child component?

	/* <habitSetting habitValues={this.state.habitValues[0]}/>
  <habitSetting habitValues={this.state.habitValues[1]}/>
  <habitSetting habitValues={this.state.habitValues[2]}/> */

// import { render } from '@testing-library/react';
// => for now I will write these out below

//I don't think collapse is needed. We can display all 3 habit cards. We are only letting them decide on the goal.
// to be "fancy" we could prompt a message or a new component box when all 3 goals are filled in by the user.
// "Let's get started!"


export default class UserProfile extends Component {
	state = {
		// collapse: false,
		titleText: "abc",
		subtitleText: "Hope you have a wonderful day!",
		initialGoal: 0,
		waterGoal: 4000,
	}


	setInitialGoal = (userInput) => {
		//let initialGoal = this.props.habitValues.goal 
		this.setState({ initialGoal: userInput })
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div id="UserProfile" className="shadow-xl text-center rounded-b-2xl">

				<h1 className="font-bold text-lg mb-4">Set your habit goals here:</h1>

				<div className="" id="MainHabit">

					<div id="setGoalForm" className="font-semibold px-16 sm:px-32">
						<form>
							<div id="waterInput" className="h-10 flex justify-between">
								<label className="">Water (mL): </label>
								<input
									className=" w-24 text-center bg-gray-100 rounded-lg my-1"
									name="waterGoal"
									value={this.props.habitValues[0].goal}
									onChange={this.handleChange}
								/>
							</div>
							<div id="exerciseInput" className="h-10 flex justify-between">
								<label>Exercise (min): </label>
								<input
									className="w-24 text-center bg-gray-100 rounded-lg mb-1"
									name="exerciseGoal"
									value={this.props.habitValues[1].goal}
									onChange={this.handleChange}
								/>
							</div>
							<div id="sleepInput" className="h-10 flex justify-between">
								<label>Sleep (min): </label>
								<input
									className="w-24 text-center bg-gray-100 rounded-lg"
									name="sleepGoal"
									value={this.props.habitValues[2].goal}
									onChange={this.handleChange}
								/>
							</div>
						</form>
					</div>

					<div className="flex justify-around">

						<SaveButton />
						<LogOutButton logOutUser={this.props.logOutUser}/>
					</div>
				</div>
			</div>
		)
	}
}
