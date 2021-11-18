export default function SaveButton(props) {
    return (
        <div id="saveButton" className="m-4 bg-gray-200 w-1/4 h-10 rounded-xl flex justify-center">
            
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <div className="w-10 h-10">
                <p className= "mt-2">Save</p>
            </div>
        </div>
    )
}