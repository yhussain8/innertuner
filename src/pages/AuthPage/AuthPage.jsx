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
                    <div> 
                        <LoginForm setUserInState={this.props.setUserInState}/>
                        <button onClick={this.handleSignUp}>Sign Up</button>
                    </div>
                    : 
                    <SignUpForm setUserInState={this.props.setUserInState} handleLogInArrow={this.handleLogInArrow} />
                }
            </div>
        )
    }
}