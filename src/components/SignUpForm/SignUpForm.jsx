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
              this.props.setUserInState(userDoc)
        } catch (err) {
            console.log("Sign up form error", err)
            this.setState({error: 'LOG IN FAILED - TRY AGAIN'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return (
            <div >


                <form autoComplete="off" onSubmit={this.handleSubmit}>

                    <div className="rounded border mx-1 5">lets see</div>
                    <label>NAME</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    <label>EMAIL</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>PASSWORD</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <label>CONFIRM</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}