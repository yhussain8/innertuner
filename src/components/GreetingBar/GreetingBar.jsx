import DatePicker from '../../components/DatePicker/DatePicker'

export default function GreetingBar(props) {
    return (
        <div id="greetingBar" className="border border-black">
            <div id="currentDate">{props.currentDate}</div>
            <div id="userGreeting">Hello {props.currentUser}!</div>
            <DatePicker currentDate={props.currentDate} selectDate={props.selectDate}/>
        </div>
    )
}