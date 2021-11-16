import Logo from '../../components/Logo/Logo'
import LogOutButton from '../../components/LogOutButton/LogOutButton'

export default function NavBar(props) {
    return (
        <div id="navBar" className="border border-black">
            <Logo />
            <LogOutButton logOutUser={props.logOutUser} />
            <div id="userProfileButton">
                User Profile Button
            </div>
        </div>
    )
}