import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'

export default class App extends Component {
    state = {user: ''}
    
    logInUser = (user) => {this.setState({user: user})}

    logOutUser = () => {this.setState({user: null})}

    componentDidMount() {
        let token = localStorage.getItem('token')
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1])); // decode token
            if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
                localStorage.removeItem('token');
                token = null;
            } else { // token not expired! our user is still 'logged in'. Put them into state.
                let userDoc = payload.user // grab user details from token
                this.setState({user: userDoc})      
            }
        }
    }

    render() {
        return (
            <div className="App text-gray-500 bg-gradient-to-t from-gray-50 to-white">
                {this.state.user
                    ? 
                    <Routes><Route path='*' element={<HomePage user={this.state.user} logOutUser={this.logOutUser}/>}/></Routes>
                    :
                    <AuthPage logInUser={this.logInUser}/>
                }
                <div className="h-20"></div>
            </div>
        )
    }
}