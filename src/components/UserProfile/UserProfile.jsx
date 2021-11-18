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

export default function UserProfile() {
  state = {
    collapse: false,
    titleText: "How is your day going?",
    subtitleText: "Hope you have a wonderful day!",
  };

  return (
    <div id="UserProfile" className="border border-black">
      {/* noot sure if we really basic user info here anymore */}

      <h1>Welcome user! Set your intentions here.</h1>

      <div className="border border-black" id="MainHabit">
        <h2>Habit Category: {this.props.habitValues.name}</h2>
        <h4>maybe a message why this habit is good for you?</h4>

        <div className="border">
          Set your goal
          <label>
            <input
              className=""
              id="goal"
              name="NewInput"
              value={this.props.habitValues[0].goal}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>log out can go here? </div>
      </div>
    </div>
  );
}
