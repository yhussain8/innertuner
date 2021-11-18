import { Component } from "react";

export default class Habit extends Component {
  state = {
    input: false,
    collapse: false, // display?
    todayTotal: 0,
    weekTotal: 0,
    NewInput: 0,
    goalRemainder: 0,
    goalRemainderPercentage: 0,
    statusMsg: "Tap to get started",
  
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

  fetchWeeklyProgress = () => {};
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
      goalRemainderPercentage:  ((this.props.habitValues.goal - this.state.todayTotal)/this.props.habitValues.goal)*100,
    });
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
      <main className="border border-black" id="Habit">
        <div className="border border-black" id="MainHabit">
          <h2>Habit Category: {this.props.habitValues.name}</h2>
          {/* Is goal handler actually displaying remainder.. check */}
          <h4>{this.goalRemainder} left to go! </h4>
          {/* below: testing if values display: */}
          {/* <h4>goal:{this.props.habitValues.goal}  </h4> */}
        </div>
        {/* after expand */}

						<button id='collapseButton' className=''
						onClick={this.handleCollapse}>collapse button</button>

     
        <div className="border border-black" id="SubHabit">
          <div className="border border-black" id="progressMsg">
            <h2>{this.props.habitValues.habitMsg}</h2>
            <h3> {this.state.weekTotal} {this.props.habitValues.unit} has been recorded this week.</h3>
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
                    id="NewInput"
                    name="NewInput"
                    value={this.state.NewInput}
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
