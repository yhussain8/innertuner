import DatePicker from '../../components/DatePicker/DatePicker'

export default function GreetingBar(props) {
    return (
        <div id="greetingBar" className="mt-8 mb-4">
            <div id="currentDate" className="flex justify-between text-xl">
                <p className="">{props.currentDate}</p>
                <DatePicker currentDate={props.currentDate} selectDate={props.selectDate}/>
            </div>
            <div id="userGreeting">
                <h1 className="font-bold text-black text-4xl">Hello {props.currentUser}!
                </h1>
            </div>
        </div>
    )
}