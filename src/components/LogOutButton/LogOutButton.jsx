export default function LogOutButton(props) {
    return (
        <div id="logOutButton" className="border border-black">
            <button onClick={props.logOutUser}>Log Out</button>
        </div>
    )
}