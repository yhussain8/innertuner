import { Component } from 'react'
export default class EmotionCard extends Component {
	state = {
		hasInput: false,
		collapse: false,
		titleText: 'How is your day going?',
		subtitleText: 'Hope you have a wonderful day!',
		classNameDefault: ' rounded-2xl px-4',
		classNameCustom: 'bg-white'
	}

	handleCollapse = () => {
		let collapse = this.state.collapse
		collapse = !collapse

		let subtitleText = this.state.subtitleText
		if (!this.state.hasInput) {
			if (!collapse) {subtitleText = 'Hope you have a wonderful day!'}
			if (collapse) {subtitleText = 'You can always update it later.'}
		}
		this.setState({collapse: collapse, subtitleText: subtitleText})
	}

	handleClick = (event, mood) => {
		let stateValues = {}
		if (mood === 1) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-red-700 text-white',
				titleText: 'Bad Day?',
				subtitleText: 'Has your day gotten better?'
			}
		} else if (mood === 2) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-yellow-500 text-white',
				titleText: 'Meh Day?',
				subtitleText: 'Has your day changed?'
			}
		} else if (mood === 3) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-green-800 text-white',
				titleText: 'Good Day?',
				subtitleText: 'Keep it up!'
			}
		}
		this.setState(stateValues)
		this.props.updateMood(event, mood)
	}

	componentDidMount() {
		let mood = parseInt(this.props.currentMood)
		let stateValues = {}
		if (mood === 1) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-red-700 text-white',
				titleText: 'Bad Day?',
				subtitleText: 'Has your day gotten better?'
			}
		} else if (mood === 2) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-yellow-500 text-white',
				titleText: 'Meh Day?',
				subtitleText: 'Has your day changed?'
			}
		} else if (mood === 3) {
			stateValues = {
				hasInput: true,
				collapse: false,
				classNameCustom: 'bg-green-800 text-white',
				titleText: 'Good Day?',
				subtitleText: 'Keep it up!'
			}
		} else {
			stateValues = {
				hasInput: false,
				collapse: false,
				titleText: 'How is your day going?',
				subtitleText: 'Hope you have a wonderful day!',
				classNameDefault: 'rounded-2xl px-4',
				classNameCustom: 'bg-white'
			}
		}
		this.setState(stateValues)
	}

	render() {
		return (
			<div id='emotionCard' className='mb-6 rounded-2xl shadow-xl'>


				<div id='emotionTitle' className={this.state.classNameDefault.concat(' ', this.state.classNameCustom)}>
					<div className="flex justify-between">
						<div className="mt-4  h-20 font-bold">
												<h2 >{this.state.titleText}</h2>
												<h4>{this.state.subtitleText}</h4>
							
											</div>
						
						<button id='collapseButton' className=''
						onClick={this.handleCollapse}>
							{this.state.collapse ? 
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
						 	</svg>
							: 
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 								 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
							</svg>
							}
						</button>
					</div>
				</div>
				{this.state.collapse
					?
					<div id='subEmotion' className=' flex justify-around '>
						<div id='emotionOptionBad' className='' onClick={(e) => this.handleClick(e, 1)}>
								<div id='emotionIconBad' className='mb-1.5'>
								<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M51.6665 36.6666C54.4279 36.6666 56.6665 34.428 56.6665 31.6666C56.6665 28.9052 54.4279 26.6666 51.6665 26.6666C48.9051 26.6666 46.6665 28.9052 46.6665 31.6666C46.6665 34.428 48.9051 36.6666 51.6665 36.6666Z" fill="#B91C1C"/>
										<path d="M28.3335 36.6666C31.0949 36.6666 33.3335 34.428 33.3335 31.6666C33.3335 28.9052 31.0949 26.6666 28.3335 26.6666C25.5721 26.6666 23.3335 28.9052 23.3335 31.6666C23.3335 34.428 25.5721 36.6666 28.3335 36.6666Z" fill="#B91C1C"/>
										<path d="M39.9998 46.6666C32.2332 46.6666 25.5998 51.5 22.9332 58.3333H28.4998C30.7998 54.3666 35.0665 51.6666 39.9998 51.6666C44.9332 51.6666 49.1665 54.3666 51.4998 58.3333H57.0665C54.3998 51.5 47.7665 46.6666 39.9998 46.6666ZM39.9665 6.66663C21.5665 6.66663 6.6665 21.6 6.6665 40C6.6665 58.4 21.5665 73.3333 39.9665 73.3333C58.3998 73.3333 73.3332 58.4 73.3332 40C73.3332 21.6 58.3998 6.66663 39.9665 6.66663ZM39.9998 66.6666C25.2665 66.6666 13.3332 54.7333 13.3332 40C13.3332 25.2666 25.2665 13.3333 39.9998 13.3333C54.7332 13.3333 66.6665 25.2666 66.6665 40C66.6665 54.7333 54.7332 66.6666 39.9998 66.6666Z" fill="#B91C1C"/>
								</svg>	
								</div>
								<div id='emotionTextBad' className="text-gray-400 text-center">Bad</div>
						</div>
						<div id='emotionOptionNeutral' className='' onClick={(e) => this.handleClick(e, 2)}>
							<div id='emotionIconNeutral' className=''><button value={2} onClick={this.props.updateMood}>
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M51.6665 36.6666C54.4279 36.6666 56.6665 34.428 56.6665 31.6666C56.6665 28.9052 54.4279 26.6666 51.6665 26.6666C48.9051 26.6666 46.6665 28.9052 46.6665 31.6666C46.6665 34.428 48.9051 36.6666 51.6665 36.6666Z" fill="#D97706"/>
								<path d="M28.3335 36.6666C31.0949 36.6666 33.3335 34.428 33.3335 31.6666C33.3335 28.9052 31.0949 26.6666 28.3335 26.6666C25.5721 26.6666 23.3335 28.9052 23.3335 31.6666C23.3335 34.428 25.5721 36.6666 28.3335 36.6666Z" fill="#D97706"/>
								<path d="M39.9665 6.66663C21.5665 6.66663 6.6665 21.6 6.6665 40C6.6665 58.4 21.5665 73.3333 39.9665 73.3333C58.3998 73.3333 73.3332 58.4 73.3332 40C73.3332 21.6 58.3998 6.66663 39.9665 6.66663ZM39.9998 66.6666C25.2665 66.6666 13.3332 54.7333 13.3332 40C13.3332 25.2666 25.2665 13.3333 39.9998 13.3333C54.7332 13.3333 66.6665 25.2666 66.6665 40C66.6665 54.7333 54.7332 66.6666 39.9998 66.6666Z" fill="#D97706"/>
								<path d="M23.3332 50H56.6665V55H23.3332V50Z" fill="#D97706"/>
							</svg>			
															
								</button></div>
							<div id='emotionTextNeutral' className="text-gray-400  text-center">Neutral</div>
						</div>
						<div id='emotionOptionGood' className='' onClick={(e) => this.handleClick(e, 3)}>
							<div id='emotionIconGood' className=''><button value={3} onClick={this.props.updateMood}>
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M51.6665 36.6666C54.4279 36.6666 56.6665 34.428 56.6665 31.6666C56.6665 28.9052 54.4279 26.6666 51.6665 26.6666C48.9051 26.6666 46.6665 28.9052 46.6665 31.6666C46.6665 34.428 48.9051 36.6666 51.6665 36.6666Z" fill="#047857"/>
									<path d="M28.3335 36.6666C31.0949 36.6666 33.3335 34.428 33.3335 31.6666C33.3335 28.9052 31.0949 26.6666 28.3335 26.6666C25.5721 26.6666 23.3335 28.9052 23.3335 31.6666C23.3335 34.428 25.5721 36.6666 28.3335 36.6666Z" fill="#047857"/>
									<path d="M39.9998 53.3333C35.0665 53.3333 30.8332 50.6333 28.4998 46.6666H22.9332C25.5998 53.5 32.2332 58.3333 39.9998 58.3333C47.7665 58.3333 54.3998 53.5 57.0665 46.6666H51.4998C49.1665 50.6333 44.9332 53.3333 39.9998 53.3333ZM39.9665 6.66663C21.5665 6.66663 6.6665 21.6 6.6665 40C6.6665 58.4 21.5665 73.3333 39.9665 73.3333C58.3998 73.3333 73.3332 58.4 73.3332 40C73.3332 21.6 58.3998 6.66663 39.9665 6.66663ZM39.9998 66.6666C25.2665 66.6666 13.3332 54.7333 13.3332 40C13.3332 25.2666 25.2665 13.3333 39.9998 13.3333C54.7332 13.3333 66.6665 25.2666 66.6665 40C66.6665 54.7333 54.7332 66.6666 39.9998 66.6666Z" fill="#047857"/>
							</svg>
								</button></div>

							<div id='emotionTextGood' className="text-gray-400  text-center">Good</div>
						</div>
					</div>
					:
					<div id='hiddenSubEmotion'></div>
				}


			</div>
		)
	}
}