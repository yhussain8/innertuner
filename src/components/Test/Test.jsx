
import styles from './Test.module.css'


import React, { Component } from 'react'

export class Test extends Component {
    state={
        show:false
    }
    handleDropdown=()=>{
       
        this.setState({
            show:true
        })
    }
    handleSet=()=>{
        this.setState({
            show:false
        })
    }


    render() {
        return (
           
            <div ClassName=" ">

            <div className="container">
            <div className="my-4 rounded-2xl w-full h-20 text-white  pt-4 pl-4 bg-gradient-to-r from-purple-900 to-pink-400">
                <p className=" ">Exercise</p>
                </div>
            <div className="my-4 rounded-2xl w-9/12 h-20 text-white pt-4 pl-4 bg-gradient-to-r from-blue-400 to-green-100">
                <p className=" ">Exercise</p>

            </div>
            <div className="my-4 rounded-2xl w-3/5 h-20 text-white pt-4 pl-4 bg-gradient-to-r from-yellow-500 to-red-500">
                <p className=" ">Exercise</p>
            </div>                         
            </div>

            <div className="container">
                <div className="flex justify-around">
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-600 text-center pt-1 w-10 h-10">C</div>
                </div>
                <div className="flex justify-around">
                    <div className="rounded-full">M</div>
                    <div className="rounded-full">Tu</div>
                    <div className="rounded-full">W</div>
                    <div className="rounded-full">Th</div>
                    <div className="rounded-full">F</div>
                    <div className="rounded-full">Sa</div>
                    <div className="rounded-full">Su</div>
                </div>
            </div>



            <div className="container">


                <div className="comp border">
                    <div className="habbitDropdown">
                        <div className="flex justify-between px-4 w-full">
                            <div className="mt-6   font-bold text-blue-400">
                                <h1>Water what is this ? </h1>
                        </div>
                            <button onClick={()=> this.handleDropdown()}
                            className=" font-bold text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className=  {!this.state.show ? "hidden" : "bg-white"}
             
                    >
                        <div className="flex justify-around border border-gray-50  rounded-xl px-4 mb-4">
                            <div className="border">-100</div>
                            <div className="border">1231</div>
                            <div className="border">+100</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 rounded-xl mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="h-16 border border-gray-50 shadow-xl rounded-xl my-4 px-4 bg-white">
                        
                                <div onClick={()=> this.handleSet()}
                                className="border rounded-xl h-12 w-full bg-gray-200 text-center">
                                    set the thing and send back</div>
                        </div>
                    </div>

                </div>
                    



                <div className="habbitDropdown flex justify-between px-4">
                    <div className="mt-4   font-bold text-yellow-500">
                        <h1>Exercise</h1>
                    </div>
                    <button className=" font-bold text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <div className="habbitDropdown flex justify-between px-4">
                    <div className="mt-4   font-bold text-purple-500">
                        <h1>Sleep</h1>
                    </div>
                    <button className=" font-bold text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                
            </div>
            <div className="container">
                    <div className="bg-white">
                        <div className="flex justify-around border border-gray-50  rounded-xl px-4 mb-4">
                            <div className="border">-100</div>
                            <div className="border">1231</div>
                            <div className="border">+100</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="flex justify-around border border-gray-50 rounded-xl mb-2 px-4">
                                <div className="mr-2 border rounded-xl h-12 w-3/4 bg-gray-200">1L</div>
                                <div className="ml-2 border rounded-xl h-12 w-3/4 bg-gray-200">6</div>
                        </div>
                        <div className="h-16 border border-gray-50 shadow-xl rounded-xl my-4 px-4 bg-white">
                        
                                <div className="border rounded-xl h-12 w-full bg-gray-200 text-center">set</div>
                        </div>
                    </div>

            </div>



            <div className="container">  
                <div className="moodDropdown flex justify-between px-4 text-white bg-red-700 ">
                    <div className="mt-6 font-bold">
                        <h1>Bad day?</h1>
                    </div>
                    <button className=" font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div className="moodDropdown flex justify-between px-4 text-white bg-yellow-500">
                    <div className="mt-6 font-bold">
                        <h1>Meh day?</h1>
                    </div>
                    <button className=" font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <div className="moodDropdown flex justify-between px-4">
                    <div className="mt-4   font-bold text-purple-500">
                        <h1>Good day?</h1>
                    </div>
                    <button className=" font-bold text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                
            </div>


            <div className="container">
                <div className="flex justify-around">
                    <div className="rounded-full border-4 bg-gray-100 border-red-700 text-center pt-1 w-20 h-20">B</div>
                    <div className="rounded-full border-4 bg-gray-100 border-yellow-700 text-center pt-1 w-20 h-20">N</div>
                    <div className="rounded-full border-4 bg-gray-100 border-purple-500 text-center pt-1 w-20 h-20">G</div>
                </div>
            </div>

            <div className="container">
                <h1 className="py-5 text-8xl text-center font-bold text-gradient  bg-gradient-to-r from-yellow-500 to-purple-500 ">This Text</h1>
            </div>

            <div className="container flex">
                <div className="w-20 h-20 bg-yellow-500 rounded-full p-2">
                    <div className="w-16 h-16 bg-purple-500 rounded-full ml-"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 text-purple-500" fill="none" viewBox="0 0 24 24"                    stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <svg  className="h-20 w-20"viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M344 320H167.1c-13.2 0-23.98 10.75-23.98 24s10.78 24 23.98 24h176.1c13.2 0 23.98-10.75 23.98-24S357.2 320 344 320zM175.1 240c17.8 0 32.02-14.25 32.02-32s-14.22-32-32.02-32c-17.68 0-31.99 14.25-31.99 32S158.3 240 175.1 240zM336 176c-17.8 0-32.02 14.25-32.02 32s14.22 32 32.02 32c17.68 0 31.99-14.25 31.99-32S353.7 176 336 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
                    </svg>


                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0833 10.8333C17.0498 10.8333 17.8333 10.0498 17.8333 9.08325C17.8333 8.11675 17.0498 7.33325 16.0833 7.33325C15.1168 7.33325 14.3333 8.11675 14.3333 9.08325C14.3333 10.0498 15.1168 10.8333 16.0833 10.8333Z" fill="url(#paint0_linear_1380_4933)"/>
<path d="M7.91666 10.8333C8.88316 10.8333 9.66666 10.0498 9.66666 9.08325C9.66666 8.11675 8.88316 7.33325 7.91666 7.33325C6.95017 7.33325 6.16666 8.11675 6.16666 9.08325C6.16666 10.0498 6.95017 10.8333 7.91666 10.8333Z" fill="url(#paint1_linear_1380_4933)"/>
<path d="M12 16.6666C10.2733 16.6666 8.79167 15.7216 7.975 14.3333H6.02667C6.96 16.7249 9.28167 18.4166 12 18.4166C14.7183 18.4166 17.04 16.7249 17.9733 14.3333H16.025C15.2083 15.7216 13.7267 16.6666 12 16.6666ZM11.9883 0.333252C5.54834 0.333252 0.333336 5.55992 0.333336 11.9999C0.333336 18.4399 5.54834 23.6666 11.9883 23.6666C18.44 23.6666 23.6667 18.4399 23.6667 11.9999C23.6667 5.55992 18.44 0.333252 11.9883 0.333252ZM12 21.3333C6.84334 21.3333 2.66667 17.1566 2.66667 11.9999C2.66667 6.84325 6.84334 2.66659 12 2.66659C17.1567 2.66659 21.3333 6.84325 21.3333 11.9999C21.3333 17.1566 17.1567 21.3333 12 21.3333Z" fill="url(#paint2_linear_1380_4933)"/>
<defs>
<linearGradient id="paint0_linear_1380_4933" x1="14.3333" y1="7.33325" x2="17.8333" y2="10.8333" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint1_linear_1380_4933" x1="6.16666" y1="7.33325" x2="9.66666" y2="10.8333" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint2_linear_1380_4933" x1="0.333336" y1="0.333252" x2="23.6667" y2="23.6666" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
</defs>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2 10.8C17.1941 10.8 18 9.99406 18 8.99995C18 8.00584 17.1941 7.19995 16.2 7.19995C15.2059 7.19995 14.4 8.00584 14.4 8.99995C14.4 9.99406 15.2059 10.8 16.2 10.8Z" fill="url(#paint0_linear_1380_4940)"/>
<path d="M7.8 10.8C8.79411 10.8 9.6 9.99406 9.6 8.99995C9.6 8.00584 8.79411 7.19995 7.8 7.19995C6.80589 7.19995 6 8.00584 6 8.99995C6 9.99406 6.80589 10.8 7.8 10.8Z" fill="url(#paint1_linear_1380_4940)"/>
<path d="M11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6Z" fill="url(#paint2_linear_1380_4940)"/>
<path d="M6 15.6H18V17.4H6V15.6Z" fill="url(#paint3_linear_1380_4940)"/>
<defs>
<linearGradient id="paint0_linear_1380_4940" x1="14.4" y1="7.19995" x2="18" y2="10.8" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint1_linear_1380_4940" x1="6" y1="7.19995" x2="9.6" y2="10.8" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint2_linear_1380_4940" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint3_linear_1380_4940" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
</defs>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2 10.8001C17.1941 10.8001 18 9.99419 18 9.00007C18 8.00596 17.1941 7.20007 16.2 7.20007C15.2059 7.20007 14.4 8.00596 14.4 9.00007C14.4 9.99419 15.2059 10.8001 16.2 10.8001Z" fill="url(#paint0_linear_1380_4947)"/>
<path d="M7.80001 10.8001C8.79412 10.8001 9.60001 9.99419 9.60001 9.00007C9.60001 8.00596 8.79412 7.20007 7.80001 7.20007C6.8059 7.20007 6.00001 8.00596 6.00001 9.00007C6.00001 9.99419 6.8059 10.8001 7.80001 10.8001Z" fill="url(#paint1_linear_1380_4947)"/>
<path d="M12 14.4C9.204 14.4 6.816 16.14 5.856 18.6H7.86C8.688 17.172 10.224 16.2 12 16.2C13.776 16.2 15.3 17.172 16.14 18.6H18.144C17.184 16.14 14.796 14.4 12 14.4V14.4ZM11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6Z" fill="url(#paint2_linear_1380_4947)"/>
<defs>
<linearGradient id="paint0_linear_1380_4947" x1="14.4" y1="7.20007" x2="18" y2="10.8001" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint1_linear_1380_4947" x1="6.00001" y1="7.20007" x2="9.60001" y2="10.8001" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
<linearGradient id="paint2_linear_1380_4947" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#1274FF"/>
<stop offset="0.505208" stop-color="#5F0BCA"/>
<stop offset="1" stop-color="#FF992D"/>
</linearGradient>
</defs>
</svg>


            </div>

            <div className="container">
                <div className="h-16 border rounded-xl">
                    <div className="h-16 bg-purple-400 rounded-xl w-3/4"></div>

                </div>


            <div className={styles.Battery} >
                <div className={styles.tip} />
                <div className={styles.level} style={{width:50}}>
             	
                </div>
		    </div>
            </div >

            <div className="Battery">
                <div className="tip"></div>
                <div className="level" style ={{width:30}}></div>
            </div>
        










            </div>
                            
                            

                    )
                }
}

export default Test

