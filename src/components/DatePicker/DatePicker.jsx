export default function DatePicker(props) {
    return (
        <div id="datePicker">
            <input type="date" value={props.currentDate} onChange={(e) => props.selectDate(e.target.value)} required />
        </div>
    )
}