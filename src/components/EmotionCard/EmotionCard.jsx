import { Component } from 'react'
export default class EmotionCard extends Component {
	state = {
		hasInput: false,
		collapse: false,
		titleText: 'How is your day going?',
		subtitleText: 'Hope you have a wonderful day!',
		classNameDefault: 'border border-black',
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
				classNameCustom: 'bg-red-700 text-white',
				titleText: 'Bad Day?',
				subtitleText: 'Has your day gotten better?'
			}
		} else if (mood === 2) {
			stateValues = {
				hasInput: true,
				classNameCustom: 'bg-yellow-500 text-white',
				titleText: 'Meh Day?',
				subtitleText: 'Has your day changed?'
			}
		} else if (mood === 3) {
			stateValues = {
				hasInput: true,
				classNameCustom: 'bg-green-800 text-white',
				titleText: 'Good Day?',
				subtitleText: 'Keep it up!'
			}
		}
		this.setState(stateValues)
		this.props.updateMood(event, mood)
	}

	render() {
		return (
			<div id='emotionCard' className='border border-black'>
				<div id='emotionTitle' className={this.state.classNameDefault.concat(' ', this.state.classNameCustom)}>
					<div id='titleText' className='border border-black'>
						{this.state.titleText}
					</div>
					<div id='subtitleText' className='border border-black'>
						{this.state.subtitleText}
					</div>
					<div id='collapseButton' className='border border-black' onClick={this.handleCollapse}>
						{this.state.collapse ? 'Expand Arrow' : 'Collapse Arrow'}
					</div>
				</div>
				{this.state.collapse
					?
					<div id='subEmotion' className='border border-black'>
						<div id='emotionOptionBad' className='border border-black' onClick={(e) => this.handleClick(e, 1)}>
								<div id='emotionIconBad' className='border border-black'>🙁</div>
								<div id='emotionTextBad'>Bad</div>
						</div>
						<div id='emotionOptionNeutral' className='border border-black' onClick={(e) => this.handleClick(e, 2)}>
							<div id='emotionIconNeutral' className='border border-black'><button value={2} onClick={this.props.updateMood}>😐</button></div>
							<div id='emotionTextNeutral'>Neutral</div>
						</div>
						<div id='emotionOptionGood' className='border border-black' onClick={(e) => this.handleClick(e, 3)}>
							<div id='emotionIconGood' className='border border-black'><button value={3} onClick={this.props.updateMood}>🙂</button></div>
							<div id='emotionTextGood'>Good</div>
						</div>
					</div>
					:
					<div id='hiddenSubEmotion'></div>
				}
			</div>
		)
	}
}