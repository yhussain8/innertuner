export default function DailyProgress(props) {
	return (
		<div className="dailyProgress pl-1">
			<div className="progressIndicator ml-1 mt-1">
                {(props.progressIndicator === 1) ? 
             <svg className=" w-1 h-10"
             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                : ( (props.progressIndicator === 2) ? 
                <svg  className="w-10 h-10"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                : ((props.progressIndicator === 3) ? 
                
                <svg className="w-10 h-10"
                 width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                : ""
            
                ))}
            </div>
            <div className="text-center font-semibold mt-1">
                {props.dayText}
            </div>
		</div>
	)
}