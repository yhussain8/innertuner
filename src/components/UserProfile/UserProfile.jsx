//=> maybe have a simple page of “how to” for the app and we can tell them too go to user profile page to add their goals as first step.

// Let's simplify the scenairo that user has to use all 3 habits.
// Here in user profile, user will change the goal and increments.
// should we ask the desinger for a quick layout for this?

// preferably I want to have habit setting as components.
//but the habitvalue stst comes from home page, can we send that to another child component?
{
  /* <habitSetting habitValues={this.state.habitValues[0]}/>
<habitSetting habitValues={this.state.habitValues[1]}/>
<habitSetting habitValues={this.state.habitValues[2]}/> */
}
// => for now I will write these out below

//I don't think collapse is needed. We can display all 3 habit cards. We are only letting them decide on the goal.
// to be "fancy" we could prompt a message or a new component box when all 3 goals are filled in by the user.
// "Let's get started!"
export default function UserProfile() {
  state = {
    // collapse: false,
    titleText: "abc",
    subtitleText: "Hope you have a wonderful day!",
    initialGoal: 0,
  };


  setInitialGoal = (userInput) => {
    let this.initialGoal = this.props.habitValues.goal 
    this.setState({this.initialGoal: userInput})
  }

  return (
    <div id="UserProfile" className="border border-black">
      {/* noot sure if we really basic user info here anymore */}

      <h1>Welcome to InnerTunner userName! Set your intentions here.</h1>

      <div className="border border-black" id="MainHabit">
        <h2>Habit Category: {this.props.habitValues.name}</h2>
        {/* maybe a message why this habit is good for you?
        ex) Resting is just as important as abc! Or something about how setting goal is half the battle to acheive your 
        healthy future. */}
        <h4>Encouraging message here</h4>

        <div className="border">
          Goal:
          <label>
            <input
              className=""
              id="waterGoal"
              name="NewInput"
              value={this.props.habitValues[0].goal}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="border">
          Goal:
          <label>
            <input
              className=""
              id="sleepGoal"
              name="NewInput"
              value={this.props.habitValues[1].goal}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="border">
          Goal:
          <label>
            <input
              className=""
              id="exerciseGal"
              name="NewInput"
              value={this.props.habitValues[2].goal}
              onChange={this.handleChange}
            />
          </label>
        </div>

{/* Button to submit all 3 goals after putting input for all 3  */}
        <div className="" id="submiBtn">
            <button onClick={this.state.setInitialGoal}>ADD</button>
        </div>


        <div className="border" id="thankYouMsg">
          <h2>Great job! Let's get started!</h2>
        </div>


        <div className="border" id="logout">
          log out can go here. 
          {/* (if we decide to not keep it in the homepage )  */}
          </div>
      </div>
    </div>
  );
}
