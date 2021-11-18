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
			<div id="UserProfile" className="border">

				<h1>Set your habit goals here:</h1>

				<div className="border" id="MainHabit">

					<div id="setGoalForm" className="border">
						<form>
							<div id="waterInput" className="">
								<label>Water (in mL): </label>
								<input
									className=""
									name="waterGoal"
									value={this.props.habitValues[0].goal}
									onChange={this.handleChange}
								/>
							</div>
							<div id="exerciseInput" className="">
								<label>Exercise (in min): </label>
								<input
									className=""
									name="exerciseGoal"
									value={this.props.habitValues[1].goal}
									onChange={this.handleChange}
								/>
							</div>
							<div id="sleepInput" className="">
								<label>Sleep (in min): </label>
								<input
									className=""
									name="sleepGoal"
									value={this.props.habitValues[2].goal}
									onChange={this.handleChange}
								/>
							</div>
						</form>
					</div>

					<SaveButton />
					<LogOutButton logOutUser={this.props.logOutUser}/>
				</div>
			</div>
		)
	}
}
