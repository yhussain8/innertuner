import { Component } from "react"
export default class EmotionCard extends Component {
	state = {
		input: false,
		collapse: false,
		titleText: "How is your day going?",
		subtitleText: "Hope you have a wonderful day!",
		//whatever format Tara ends up using for the color
		backgroundColor: "white"
	}

	handleCollapse = () => {
		if (this.state.collapse) {
			this.setState({
				collapse: false,
				subtitleText: "Hope you have a wonderful day!"
			})
		} else {
			this.setState({
				collapse: true,
				subtitleText: "You can always update it."
			})
		}
	}

	hasInput = (input, emotion) => {
		if (!input) return

		if (emotion === 'bad')
			this.setState(
				{
					backgroundColor: "red",
					titleText: "Bad Day?",
					subtitleText: "Has your day gotten better?"
				})

		if (emotion === 'neutral')
			this.setState(
				{
					backgroundColor: "orange",
					titleText: "Meh Day?",
					subtitleText: "Has your day changed?"
				})

		if (emotion === 'good')
			this.setState(
				{
					backgroundColor: "green",
					titleText: "Good Day?",
					subtitleText: "Keep it up!"
				})
	}


	render() {
		return (
			<main className='border border-black' id="EmotionCard">
				<div className='border border-black' id="MainEmotion">
					<h2>{this.state.titleText}</h2>
					<h4>{this.state.subtitleText}</h4>
				</div>
				{/* click to expand */}
				<button onClick={this.handleCollapse}> expand </button>
				{/* after expand */}
				{this.state.collapse
					?
					<div className='border border-black' id="SubEmotion">
						<div className=' border border-black' id="EmotionOptionBox">
							{/* these will become an emoji component each instead of button*/}
							<button value={1} onClick={this.props.updateMood}>Bad</button>
							<button value={2} onClick={this.props.updateMood}> Neutral</button>
							<button value={3} onClick={this.props.updateMood}>Good</button>
						</div>
					</div>
					:
					<div></div>
				}
			</main>
		)
	}

}