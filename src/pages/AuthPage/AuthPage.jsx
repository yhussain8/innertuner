import {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'


export default class AuthPage extends Component {
    state = {showLogin: true}

    render() {
        return (
            <div className="AuthPage">
                <h1>INNERTUNER</h1>
                <h1>AUTH PAGE</h1>
                <h2 onClick={() => this.setState({showLogin: !this.state.showLogin})}>
                    {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
                </h2>
                {this.state.showLogin 
                    ? 
                    <LoginForm setUserInState={this.props.setUserInState}/>
                    : 
                    <SignUpForm setUserInState={this.props.setUserInState} />
                }
            </div>
        )
    }
}