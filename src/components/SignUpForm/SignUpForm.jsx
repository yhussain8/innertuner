import { Component } from 'react'
import AuthText from '../../components/AuthText/AuthText'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fetchResponse = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password})
              })
              
              if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
              
              let token = await fetchResponse.json()
              localStorage.setItem('token', token)
              
              const userDoc = JSON.parse(atob(token.split('.')[1])).user
              this.props.setUserInState(userDoc)
        } catch (err) {
            console.log("Sign up form error", err)
            this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return (
            <div id="signUpForm">
                <div>
                    <button  onClick={this.props.handleLogInArrow}>Log In Arrow</button>
                </div>
                <AuthText />
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>First name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <label>Confirm password</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
                    <button type="submit" disabled={disable}>Create</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}