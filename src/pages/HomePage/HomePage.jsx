import { Component } from "react";
import Logo from '../../components/Logo/Logo'
import UserProfile from '../../components/UserProfile/UserProfile'
import WeeklyProgress from '../../components/WeeklyProgress/WeeklyProgress'
import Habit from '../../components/Habit/Habit'
import EmotionCard from '../../components/EmotionCard/EmotionCard'

export default class HomePage extends Component {
  state = {
    currentUser: "",
    showDatePicker: false,
    todayDate: "today",
    currentMood: "",
    weeklyProgress: "",
    water: {title:"water", userGoal: ""},
    // or water: {title:"water", userGoal: "", todayTotal: "", custinc:"", stdinc=""},
    sleep: {title:"sleep", userGoal: ""},
    exercise: {title:"exercise", userGoal: ""},
    //progress bar for each habit? 
  };

  //   todayDate = () => {
  //     this.setState({})
  // }
  //  I don't think this fnction is necessary. it can be called as a variable as it is?

  handleDatePicker = () => {
    this.setState({ today: "newdate" });
  };

  //below is to fetch request for habit data from different day
  // and display it when user chooses it via date picker.
  // or maybe this can be part of datepicker function. (date picking + grab+ inject new data)
  fetchWeeklyProgress = () => {
    this.setState({ data: "certain day's data" });
  };

  //this is to update today's mood once user selects the mood from null.
  // probably an if statment? ex) if smiley chosen -> set state
  // also send a request to save in DB
  updateMood = (mood) => {
    this.setState({ todayMood: mood });
  };


  //log out should be here?
  handleLogout = () => {
    this.setState({ user: "" });
  };

// we should fetch all 3 habit data and smilley face here.
// and pass it to each component.

  render() {
    return (
      <main className="border border-black" id="HomePage">
        <nav className="border border-black">
          <Logo />
          <UserProfile />
          <h2>Nov 15, 2021</h2>
          <h3>Hello {this.props.user.name}</h3>
          <div>date picker goes here</div>
          <WeeklyProgress />
        </nav>
<br/> <br/> <br/> <br/>
        <div className="border border-black" id="Habits">
        <EmotionCard updateMood ={this.state.updateMood} />
        <Habit water={this.state.water} currentMood={this.state.currentMood}/>
        {/* <Habit {...this.state.sleep}/>
        <Habit {...this.state.exercise}/> */}
        </div>
      
    
        <button onClick={this.props.logOutUser}>LOG OUT</button>
        {/* <PrevOrdersList orderHistory={this.state.orderHistory} /> */}

      </main>
    );
  }
}
