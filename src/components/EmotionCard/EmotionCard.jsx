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
      <div className='border border-teal-300 my-4 shadow-2xl rounded-2xl' id="EmotionCard">
        
            {/* after expand */}
            
            <div className="moodDropdown flex justify-between px-4">
                    <div className="mt-4   font-bold text-black">
                        <h2>{this.state.titleText}</h2>
                        <h4>{this.state.subtitleText}</h4>
                    </div>
                    <button className=" font-bold text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                  <div className="flex justify-around">
                        <div className="border-red-700 emotionBtn">
                            <button onClick={this.state.updateMood}>
                              SAD</button>
                        
                        </div>
                        <div className="border-yellow-700 emotionBtn">
                            <button onClick={this.state.updateMood}>MEH</button>
                        </div>
                       
                       
                        <div className="border-purple-500 emotionBtn">
                            <button className=""
                             onClick={this.state.updateMood}>
                           Happy

                             </button>
                            
                        </div>
                </div>
               
           

      </div>
    );
  }
}
