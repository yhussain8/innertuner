import { Component } from "react"

export default class Habit extends Component {
	state = {
		input: false,
		collapse: false, // display?
		todayTotal: '',
		NewData: '',
		goalRemainder: "300ml",

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
			todayTotal: this.state.todayTotal + NewData
		})
	}

	render() {
		return (


			   <div className="" id="Habit">


					<div className="habbitDropdown  ">
							<div className="flex justify-between px-4 w-full">
								<div className="mt-6   font-bold text-blue-400">
									<h1>Water</h1>
									<h2>{this.props.title}</h2>
									<h4>{this.state.goalRemainder} left to go! </h4>
								</div>
								<button className=" font-bold text-blue-400">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>

								</button>
							</div>
					</div>

					<div className="">
                    <div className="bg-white">
                        <div className="flex justify-around border border-gray-50  rounded-xl px-4 mb-4">
                            <div className="border">-100</div>
                            <div className="border">1231</div>
                            <div className="border">+100</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 rounded-xl mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="h-16 border border-gray-50 shadow-xl rounded-xl my-4 px-4 bg-white">
                        
                                <div className="border rounded-xl h-12 w-full bg-gray-200 text-center">set</div>
                        </div>
                    </div>

            </div>





				<div className="border border-black" id="MainHabit">
					<h2>{this.props.title}</h2>
					<h4>{this.state.goalRemainder} left to go! </h4>
				</div>
				{/* after expand */}

				<div className="border border-black" id="SubHabit">
					<h2>different message per habit from array.</h2>
					<h3># has been recorded this week.</h3>
					<div className="border border-black" id="HabitProgressBar">
						Weekly progress bar for specific habit{" "}
					</div>
					<div className="border border-black" id="HabitIncrements">
						[-] custom input value [+]{" "}
						{/* onclick = handlecusinc */}
					</div>{" "}
					<div className="border border-black" id="standardInc">
						<button onClick={this.state.handleStdInc}>Cup(preset btn) </button>{" "} <span>______ </span>
						<button onClick={this.state.handleStdInc}>Bottle(preset btn)</button>
					</div>
					<button onClick={this.state.handleAddProgress}>ADD</button>
				</div>

				




			</div>
		)
	}
}
