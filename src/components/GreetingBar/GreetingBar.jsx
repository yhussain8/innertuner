import DatePicker from '../../components/DatePicker/DatePicker'

export default function GreetingBar(props) {
    return (
        <div id="greetingBar" className="border mb-4">
            <div id="currentDate" className="flex justify-between ">
                <p className="">{props.currentDate}</p>
                <DatePicker currentDate={props.currentDate} selectDate={props.selectDate}/>
            </div>
            <div id="userGreeting">
                <h1 className="font-bold text-black text-3xl">Hello {props.currentUser}!
                </h1>
            </div>
        </div>
    )
}