import { Component } from "react";

export default class Habit extends Component {
  state = {
    input: false,
    collapse: false, // display?
    todayTotal: 0,
    weekTotal: 0,
    NewData: 0,
    custincr: 150,
    goalRemainder: 0,
    statusMsg: "Tap to get started",
  };

  handleCollapse = () => {
    this.setState({
      collapse: true,
      subtitleText: "You can always update it.",
    });
  };

  handleText = () => {
    this.setState({ titleText: "" });
  };

  handleProgressBar = () => {
    // change percentage of the today/goal
    // can we include the background color change here?
  };
  fetchWeeklyProgress = () => {};

  //manual input
  handleManualInput = (input) => {
    this.setState({
      NewData: this.state.NewData + input,
    });
  };

  //custom inc , inc clicker
  handleCusInc = (cusinc) => {
    this.setState({
      NewData: this.state.NewData + cusinc,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //cup and bottle = preset
  handleStdInc(stdinc) {
    this.setState({
      NewData: this.state.NewData + stdinc,
    });
  }

  // add to DB
  // collapse the window
  handleAddProgress(NewData) {
    this.setState({
      todayTotal: this.state.todayTotal + NewData,
      weekTotal: this.state.weekTotal + NewData,
      goalRemainder: this.props.habitValues.goal - this.state.todayTotal,
    });
  }

  // handleGoalRemainder(){
  // 	this.setState({
  // 		goalRemainder: this.props.habitValues.goal - this.state.todayTotal
  // 	})
  // }

  goalReached = (input, goalRemainder) => {
    if (!input) return;

    if (goalRemainder === 0) this.setState({ statusMsg: "Completed" });
    // below is just an idea for half way point message or something. (logic not complete)
    if (goalRemainder === 0.5) this.setState({ statusMsg: "Almost there!" });
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
          <div className="border border-black" id="progressMsg">
            <h2>{this.props.habitValues.habitMsg}</h2>
            <h3> {this.state.weekTotal} mL has been recorded this week.</h3>
          </div>
          <div className="border border-black" id="HabitProgressBar">
            Weekly progress bar for specific habit{" "}
          </div>
		</div>

        <div className="HabbitInput container" id="HabitIncrements">
            <div className="bg-white">
            <div className="flex justify-around border border-gray-50  rounded-xl px-4 mb-4">
				
				<div className="border">
                  [
                  <button onClick={this.handleChange}>
                    {" "}
                    - {this.props.habitValues.incr}
                    {this.props.habitValues.unit}{" "}
                  </button>
                  ]
                </div>
				<div className="border">
					<label>
					<input
						className=""
						id="manualInput"
						name="manualInput"
						value={this.state.custincr}
						onChange={this.handleChange}
					/>
					</label>
				</div>
                <div className="border">
                  [
                  <button onClick={this.handleChange}>
                    {" "}
                    + {this.props.habitValues.incr}
                    {this.props.habitValues.unit}{" "}
                  </button>
                  ]
                </div>
            </div>

            <div className="flex justify-around border border-gray-50 mb-2 px-4">
              	<div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">
                <button onClick={this.state.handleStdInc}>
                  {this.props.habitValues.presets[0].valueText}{" "}
                </button>
              	</div>
            	<div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">
                <button onClick={this.state.handleStdInc}>
                  {this.props.habitValues.presets[1].valueText}{" "}
                </button>
              	</div>
            </div>
            <div className="flex justify-around border border-gray-50 rounded-xl mb-2 px-4">
              	<div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">
                <button onClick={this.state.handleStdInc}>
                  {this.props.habitValues.presets[0].valueText}{" "}
                </button>
              	</div>
             	 <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">
                <button onClick={this.state.handleStdInc}>
                  {this.props.habitValues.presets[1].valueText}{" "}
                </button>
              	</div>
			</div>

              {/* <button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[1].name}{this.props.habitValues.presets[1].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[2].name}{this.props.habitValues.presets[2].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[3].name}{this.props.habitValues.presets[3].valueText}</button>
						<button onClick={this.state.handleStdInc}>{this.props.habitValues.presets[3].name}{this.props.habitValues.presets[3].valueText}</button> */}
            
			</div>
			</div>	
            <div className="h-16 border border-gray-50 shadow-xl rounded-xl my-4 px-4 bg-white">
              	<div className="border rounded-xl h-12 w-full bg-gray-200 text-center">
                <button onClick={this.state.handleAddProgress}>ADD</button>{" "}
              	</div>
            </div>

      </main>
    );
  }
}
