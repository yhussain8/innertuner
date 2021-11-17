import { Component } from "react"

export default class Habit extends Component {
	state = {
		input: false,
		collapse: false, // display?
		todayTotal: 0,
		weekTotal: 0,
		NewData: 0,
		custincr: 150,
		goalRemainder: 0,
		statusMsg: "Tap to get started"

	}

	handleCollapse = () => {
		this.setState({
			collapse: true,
			subtitleText: "You can always update it.",
		})
	}

	handleText = () => {
		this.setState({ titleText: "" })
	}

	handleProgressBar = () => {
		// change percentage of the today/goal 
		// can we include the background color change here? 
	}
	fetchWeeklyProgress = () => {

	}


	//manual input
	handleManualInput = (input) => {
		this.setState({
			NewData: this.state.NewData + input
		})
	}

	//custom inc , inc clicker 
	handleCusInc = (cusinc) => {
		this.setState({
			NewData: this.state.NewData + cusinc
		})
	}

	//cup and bottle = preset
	handleStdInc(stdinc) {
		this.setState({
			NewData: this.state.NewData + stdinc
		})
	}

	// add to DB 
	// collapse the window
	handleAddProgress(NewData) {
		this.setState({
			todayTotal: this.state.todayTotal + NewData,
			weekTotal: this.state.weekTotal + NewData,
			goalRemainder: this.props.habitValues.goal - this.state.todayTotal
		})
	}

	// handleGoalRemainder(){
	// 	this.setState({
	// 		goalRemainder: this.props.habitValues.goal - this.state.todayTotal
	// 	})
	// }

	goalReached = (input, goalRemainder) => {
		if (!input) return
	
		if ( goalRemainder === 0 ) 
		  this.setState(
			{statusMsg: "Completed",
		 })
	// below is just an idea for half way point message or something. (logic not complete)
		if( goalRemainder === 0.5 )
			this.setState(
			  {statusMsg: "Almost there!",
			})
	  };


	render() {
		return (
			<main className="border border-black" id="Habit">
				<div className="border border-black" id="MainHabit">
				<h2>Habit Category: {this.props.habitValues.name}</h2>
					{/* Is goal handler actually displaying remainder.. check */}
					<h4>{this.goalRemainder} left to go! </h4>
					{/* below: testing if values display: */}
					{/* <h4>goal:{this.props.habitValues.goal}  </h4> */}
				</div>
				{/* after expand */}

				<div className="border border-black" id="SubHabit">
				<h2>{this.props.habitValues.habitMsg}</h2>
					<h3> {this.state.weekTotal} mL has been recorded this week.</h3>
					<div className="border border-black" id="HabitProgressBar">
						Weekly progress bar for specific habit{" "}
					</div>
					<div className="border border-black" id="HabitIncrements">
						[- {this.props.habitValues.incr} {this.props.habitValues.unit} ] {this.state.custincr} [+ {this.props.habitValues.incr}{this.props.habitValues.unit} ]
						{/* onclick = handlecusinc */}
					</div>{" "}
					<div className="border border-black" id="standardInc">
						<button onClick={this.state.handleStdInc}> {this.props.habitValues.presets[0].valueText} </button>
						{/* <button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[1].name}{this.props.habitValues.presets[1].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[2].name}{this.props.habitValues.presets[2].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[3].name}{this.props.habitValues.presets[3].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[3].name}{this.props.habitValues.presets[3].valueText}</button> */}
					</div>
					<button onClick={this.state.handleAddProgress}>ADD</button>
				</div>
			</main>
		)
	}
}
