//ICE: Overal card changing color and text depending on mood

import { Component } from "react";
export default class Habit extends Component {
  state = {
    input: false,
    collapse: false, // display?
    todayTotal: '',
    NewData: '',
    goalRemainder: "300ml",

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
  }
  fetchWeeklyProgress = () => {

  }

  
//manual input
handleManualInput = (input) => {
  this.setState({
      NewData: this.state.NewData + input
    });
}

//custom inc , inc clicker 
handleCusInc = (cusinc) => {
    this.setState({
        NewData: this.state.NewData + cusinc
      });
}

//cup and bottle = preset
handleStdInc(stdinc) {
    this.setState({
      NewData: this.state.NewData + stdinc
    });
  }

// add to DB 
// collapse the window
handleAddProgress(NewData) {
    this.setState({
      todayTotal: this.state.todayTotal + NewData
    });
  }


  render() {
    return (
      <main className="border border-black" id="Habit">
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
      </main>
    );
  }
}
