//ICE: Overal card changing color and text depending on mood

import { Component } from "react";
export default class EmotionCard extends Component {
  state = {
    input: false,
    collapse: false,  // display?
    titleText: "How is your day going?",
    subtitleText: "Hope you have a wonderful day!"
  };

  handleCollapse = () => {
    this.setState({ collapse: true,
      subtitleText: "You can always update it."
    });
  };

  handleText= () => {
    this.setState({titleText: ""})
  }


  //this currenlty exist in the parent. maybe I should have it here? 
  updateMood = (emotion) => {
    this.setState({ todayMood: "whateveris picked." });
  };

  displayChange =() =>
  {
// if statemnt -> has input && bad emoji -> color red + gotten better? msg
// has input && neutrl -> yellow + msg 2 
// has input && good -> green + msg 3
  };


  render() {
    return (
      <main className='border border-black' id="EmotionCard">
        <div className='border border-black' id="MainEmotion">
          Emotion CARD
          <h2>{this.state.titleText}</h2>
          <h4>{this.state.subtitleText}</h4>
        </div>
            {/* after expand */}
        <div className='border border-black' id="SubEmotion"> 
          <div className=' border border-black' id="EmotionOptionBox"> 
          <button onClick={this.state.updateMood}>SAD</button> ___
          <button onClick={this.state.updateMood}>MEH</button> ___
          <button onClick={this.state.updateMood}>HAPPY</button>
          </div>
        </div> 
      </main>
    );
  }
}
