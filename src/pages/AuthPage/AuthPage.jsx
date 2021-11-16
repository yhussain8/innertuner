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
                        <LoginForm setUserInState={this.props.setUserInState}/>
                        <div className="container ">
                            <button className="btn text-blue-500"
                            onClick={this.handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                    : 
                    <SignUpForm setUserInState={this.props.setUserInState} handleLogInArrow={this.handleLogInArrow} />
                }
            </div>
        )
    }
}