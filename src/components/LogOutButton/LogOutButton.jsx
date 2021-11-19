export default function LogOutButton(props) {
    return (
        <div id="logOutButton" className="m-4 bg-gray-200 w-1/4 h-10 rounded-xl flex justify-center">
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <div onClick={props.logOutUser}>
        <p className= "mt-2 text-sm sm:text-base">Log Out</p>
        </div>
    </div>
    )
}