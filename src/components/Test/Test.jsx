import React from 'react'


function Test() {
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


                <div className="habbitDropdown  ">
                    <div className="flex justify-between px-4 w-full">
                        <div className="mt-6   font-bold text-blue-400">
                            <h1>Water</h1>
                        </div>
                        <button className=" font-bold text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </button>
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
                <div className="moodDropdown flex justify-between px-4 text-white bg-red-700">
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
            








        </div>
    )
}

export default Test
