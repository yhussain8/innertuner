export default function LogOutButton(props) {
    return (
        <div id="logOutButton" className="mt-1">
        <button onClick={props.logOutUser}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 mt-1 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        </button>
    </div>
    )
}