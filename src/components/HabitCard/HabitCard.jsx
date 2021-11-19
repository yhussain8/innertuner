import { Component } from "react";
import WeeklyHabitProgress from '../../components/WeeklyHabitProgress/WeeklyHabitProgress'
import MinusButton from '../../components/IncrementButtons/MinusButton'
import PlusButton from '../../components/IncrementButtons/PlusButton'
import PresetButton from '../../components/PresetButton/PresetButton'

export default class Habit extends Component {
	state = {
		input: false,
		collapse: false, // display?
		todayTotal: 0,
		weekTotal: 0,
		NewInput: 0,
		goalRemainder: 0,
		goalRemainderText: "4000 mL",
		goalRemainderPercentage: 0,
		statusMsg: "Tap to get started",
		weeklyHabitProgress: [
			{ M: 1 },
			{ Tu: 1 },
			{ W: 1 },
			{ Th: 0 },
			{ F: 0 },
			{ Sa: 0 },
			{ Su: 0 }
		]

	};

	// handleCollapse = () => {
	//   this.setState({
	//     collapse: true,
	//     subtitleText: "You can always update it.",
	//   });
	// };
	handleCollapse = () => {
		let collapse = this.state.collapse;
		collapse = !collapse;

		let subtitleText = this.state.subtitleText;
		if (!this.state.hasInput) {
			if (!collapse) {
				subtitleText = "Hope you have a wonderful day!";
			}
			if (collapse) {
				subtitleText = "You can always update it later.";
			}
		}
		this.setState({ collapse: collapse, subtitleText: subtitleText });
	};

	fetchWeeklyProgress = () => { };
	handleText = () => {
		this.setState({ titleText: "" });
	};

	handleProgressBar = () => {
		// change percentage of the today/goal
		// can we include the background color change here?
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	//manual input
	handleManualInput = (input) => {
		this.setState({
			NewInput: this.state.NewInput + input,
			// or like below if we want to differentiate manual typing vs and preset which i prefer
			// NewInput: this.state.NewInput,
		});
	};

	//custom inc , inc clicker
	handleInc = (inc) => {
		this.setState({
			NewInput: this.state.NewInput + inc,
		});
	};

	//cup and bottle = preset
	handlePreset(preset) {
		this.setState({
			NewInput: preset,
		});
	};


	// add to DB
	// collapse the window
	//this also re-calculates remainder goal.
	//1) show remainder to go ! message
	//2) tara can utilize goal remainder percentage to fill up the component's color. 
	handleAddProgress(NewInput) {
		this.setState({
			todayTotal: this.state.todayTotal + NewInput,
			weekTotal: this.state.weekTotal + NewInput,
			goalRemainder: this.props.habitValues.goal - this.state.todayTotal,
			goalRemainderPercentage: ((this.props.habitValues.goal - this.state.todayTotal) / this.props.habitValues.goal) * 100,
		});
	}

	// works
	handleStdInc = (value) => {
		let updatedInput = this.state.NewInput + value
		this.setState({ NewInput: updatedInput })
	}

	//message on the main habit bar will change when goal is acheived. 
	goalReached = (input, goalRemainder) => {
		if (!input) return;
		if (goalRemainder === 0) this.setState({ statusMsg: "Completed" });
		// below is just an idea for half way point message or something. (logic not complete)
		if (goalRemainder === 0.5) this.setState({ statusMsg: "Almost there!" });
	};

	render() {
		return (
			<div id="habitCard" className="mb-6 rounded-2xl shadow-xl  bg-white">
				<div id="cardTop" className="rounded-2xl px-4 bg-white py-2">
					<div id="progressBar" className="water-prog-bg" style={{ width: '40vw' }}></div>
					<div id="cardTopContents" className="flex justify-between">
						<div id="titleText" className=" font-bold water-Gradient-Text">
							<h2 className="">{this.props.habitValues.name}</h2>
							<h4 className="">{this.state.goalRemainderText} left to go!</h4>
						</div>
						<button id='collapseButton' onClick={this.handleCollapse}>
							{this.state.collapse
								?
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
								</svg>
								:
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
								</svg>
							}
						</button>
					</div>
				</div>
				{this.state.collapse
					?
					<div id="cardBottom">
						<div id="habitProgress" className="">
							<div id="progressMsg" className="m-4">
								<h2>{this.props.habitValues.habitMsg}</h2>
								<h3>{this.state.weekTotal} {this.props.habitValues.unit} has been recorded this week.</h3>
							</div>
						</div>

						<div id="habitProgressBar">
							<WeeklyHabitProgress weeklyProgress={this.state.weeklyHabitProgress} habitName={this.props.habitValues.name} />
						</div>

						<div id="habitInput" className="bg-white flex justify-around border border-gray-50 rounded-xl px-4 mb-4">
							<div id="minusButton" className="flex" onClick={this.handleMinuButton}>
								<MinusButton />
								{this.props.habitValues.incr}{" "}
								{this.props.habitValues.unit}
							</div>
							<div id="manualInput">
								<input
									className="text-center underline"
									id="NewInput"
									name="NewInput"
									value={this.state.NewInput}
									onChange={this.handleChange}
								/>
							</div>
							<div id="plusButton" className="flex" onClick={this.handlePlusButton}>
								{this.props.habitValues.incr}{" "}
								{this.props.habitValues.unit}
								<PlusButton />
							</div>
						</div>

						<div id="presetButtonsBar" className="flex justify-around border border-gray-50 rounded-xl mb-2 px-4">
							{this.props.habitValues.presets.map((value, index) => <PresetButton handleStdInc={this.handleStdInc} valueText={value.valueText} value={value.value} />)}
						</div>

						<div id="addButton" className="h-16 border border-gray-50 shadow-xl rounded-xl my-4 px-4 bg-white">
							<div className="waterBtn ">
								<button className=""
									onClick={this.state.handleAddProgress}>ADD</button>{" "}
							</div>
						</div>

					</div>
					:
					<div id="cardBottomHidden">
					</div>
				}
			</div>
		)
	}
}
