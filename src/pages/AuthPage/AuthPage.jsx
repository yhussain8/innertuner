import {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'


export default class AuthPage extends Component {
    state = {showLogin: true}

    handleSignUp = () => {
        this.setState({showLogin: false})
    }

    handleLogInArrow = () => {
        this.setState({showLogin: true})
    }

    render() {
        return (
            <div className="AuthPage">
                {this.state.showLogin 
                    ?
                    <div className=""> 
                        <LoginForm logInUser={this.props.logInUser}/>
                        <div className="container ">
                            <button className="btn text-blue-500"
                            onClick={this.handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                    : 
                    <SignUpForm logInUser={this.props.logInUser} handleLogInArrow={this.handleLogInArrow} />
                }
            </div>
        )
    }
}