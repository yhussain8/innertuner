export default function DatePicker(props) {
    return (
        <div id="datePicker" className="">
            <input className="text-3xl w-14" 
            type="date" value={props.currentDate} onChange={(e) => props.selectDate(e.target.value)}/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg> */}
            
        </div>
    )
}