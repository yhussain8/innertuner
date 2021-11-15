import {Component} from 'react'

export default class HomePage extends Component {
    render() {
        return (
         <div className="HomePage">
            <div className="flex justify-between itmes-center px-4">
                <h1 className="my-2 font-semibold text-base text-gray-700 tracking-widest">INNERTUNER</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="my-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>                       
            </div>
            
            
            <div className="date flex justify-between itmes-center px-4 mt-8">
            <h2 className="font-normal text-base text-gray-500">November,  15, 2021</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>

            <div className="flex justify-between px-4">
                    <h3 className="text-4xl font-bold ">Hi {this.props.user.name}</h3>
                    <button onClick={this.props.logOutUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
            </div>
           </div>
        )
    }
}