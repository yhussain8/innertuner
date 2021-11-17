import { Component } from 'react'


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
              this.props.logInUser(userDoc)
        } catch (err) {
            console.log("Sign up form error", err)
            this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return (
            <div id="signUpForm">
                <div className="container">
                    <button  onClick={this.props.handleLogInArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    </button>
                </div>
                <div id="AuthText" className="container">
                <h4 className="mt-9 font-semibold text-base text-gray-500">Join</h4>
                <h2 className="font-semibold text-3xl text-gray-700 tracking-widest">INNERTUNER</h2> 
                <p className="font-medium text-base text-gray-600">
                    Your daily intro to healthy habit</p>
        
                </div><div className="container">
                    
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="inputWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                            <label></label>
                            <input className="input placeholder-gray-200::placeholder" 
                            placeholder="First name"
                            type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <div className="inputWrapper">
                             <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <label></label>
                            <input className="input placeholder-gray-200::placeholder" 
                            placeholder="Email address"
                            type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                            
                        </div>
                        <div className="inputWrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <label></label>
                            <input className="input placeholder-gray-200::placeholder" 
                            placeholder="Password"
                            type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            
                        </div>
                        <div className="inputWrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <label></label>
                            <input className="input placeholder-gray-200::placeholder" 
                            placeholder="Confirm password"
                            type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
                        </div>
                        <button className="btn bg-blue-500 text-white mt-16"
                        type="submit" disabled={disable}>Create account</button>
                    </form>
                    <p>{this.state.error}</p>
                </div>
            </div>
        )
    }
}