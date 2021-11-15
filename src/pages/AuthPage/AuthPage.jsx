import {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'


export default class AuthPage extends Component {
    state = {showLogin: true}

    render() {
        return (
            <div className="AuthPage">
                <div className="flex ">
                    <div className="ml-9 mt-14" >
                        <h2 className="font-semibold text-base text-gray-500">Welcome to</h2>
                        <h1 className="font-semibold text-3xl text-gray-700 tracking-widest">INNERTUNER</h1>
                        <h2 className="font-semibold text-base text-gray-500">Your daily intro to healthier habit</h2>
                    </div>
                </div>
                
                <div className=" grid place-items-center ">    
                    {/* this is the login or signup form */}
                    
                    <div className=" w-4/5  mt-3.5">       
                                              
                        <div className=" justify-center">
                            {this.state.showLogin
                                ?
                                <div className="">
                                    <LoginForm setUserInState={this.props.setUserInState}/>
                                </div>
                                :
                                <div className="">
                                    <SignUpForm setUserInState={this.props.setUserInState} />
                                </div>
                            }
                            

                        </div>
                    </div>
                    <div className="flex justify-center">
                              
                               <h2 className="rounded py-3.5 px-5 uppercase text-xs font-bold cursor-pointer tracking-wider bg-black text-white "
                               onClick={() => this.setState({showLogin: !this.state.showLogin})}>
                                   {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
                               </h2>
                    </div>
                </div>
                

                {/* LOG IN or SignUP */}
                <div className="flex justify-center mb-4">
                    <div class="btn"
                    onClick={() => this.setState({showLogin: !this.state.showLogin})}>Log in</div>
                    
                </div>
                <div className="flex justify-center">
                    
                    <div class="btn"
                    onClick={() => this.setState({showLogin: !this.state.showLogin})}>Sign Up
                    {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
                    </div>
                </div>
            </div>
        )
    }
}