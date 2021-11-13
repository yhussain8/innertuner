import { Component } from 'react'

export default class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
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
            const fetchResponse = await fetch('/api/users/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: this.state.email, password: this.state.password})
            })

            if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

            let token = await fetchResponse.json()
            localStorage.setItem('token', token)

            const userDoc = JSON.parse(atob(token.split('.')[1])).user
            this.props.setUserInState(userDoc)

        } catch (err) {
            console.log("Log in form error", err)
            this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
        }
    }

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>EMAIL</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>PASSWORD</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <button type="submit">LOG IN</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}