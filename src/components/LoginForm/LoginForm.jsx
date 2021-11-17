import { Component } from 'react'
import AuthText from '../../components/AuthText/AuthText'

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
            this.props.logInUser(userDoc)

        } catch (err) {
            console.log("Log in form error", err)
            this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
        }
    }

    render() {
        return (
            <div id="loginForm">
                <AuthText />

                <div className="container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="inputWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                            <label></label>
                            <input className="input"
                            placeholder="Email"
                            type="text" name="email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        
                        
                        
                        <div className="inputWrapper flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                            <label></label>
                            <input className="input placeholder-gray-200::placeholder"
                            placeholder="Password"
                            type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            
                        </div>
                        
                        <div className="flex justify-between">
                            <div><p className="text-sm">Remember me</p></div>
                            <div><p className="text-sm underline">Forget password?</p></div>
                        </div>
                        <div className="flex">
                            <button className="btn mt-16 bg-blue-500 text-white"
                            type="submit">Log In</button>
                        </div>
                    </form>
                    <p>{this.state.error}</p>
                </div>
            </div>
        )
    }
}