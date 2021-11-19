import { Component } from "react";
import WeeklyHabitProgress from '../../components/WeeklyHabitProgress/WeeklyHabitProgress'
import MinusButton from '../../components/IncrementButtons/MinusButton'
import PlusButton from '../../components/IncrementButtons/PlusButton'
import PresetButton from '../../components/PresetButton/PresetButton'

export default class Habit extends Component {
	render() {
		return (
			<div id="habitCard" className="mb-6 rounded-2xl shadow-xl bg-white">
				<div id="cardTop" className="rounded-2xl px-4 bg-white py-2">
					<div id="progressBar" className={this.props.cssProgressBar} style={{ width: this.props.habitProgressPercentage }}></div>
					<div id="cardTopContents" className="flex justify-between">
						<div id="titleText" className={this.props.cssTitleText}>
							<p>{this.props.habitValues.name}</p>
							{this.props.goalRemainder
								? 
								<p>{this.props.goalRemainder} {this.props.habitValues.unit} left to go!</p>
								:
								<p>Daily goal achieved. Great job!</p>
							}
						</div>
						<button id='collapseButton' onClick={this.props.handleCollapse}>
							{this.props.collapse
								?
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
				{this.props.collapse
					?
					<div id="cardBottom">
						<div id="habitProgress">
							<div id="progressMsg" className="m-4">
								<h2>{this.props.habitValues.habitMsg}</h2>
								<h3>{this.props.weekTotal} {this.props.habitValues.unit} has been recorded this week.</h3>
							</div>
						</div>
						<div id="habitProgressBar">
							<WeeklyHabitProgress weeklyProgress={this.props.weeklyProgress} habitName={this.props.habitValues.name} />
						</div>
						<div id="habitInput" className="bg-white flex justify-around rounded-xl px-4 mb-4 ">
							<div id="minusButton" className="flex" onClick={this.props.handleMinusButton}>
								<MinusButton />{this.props.habitValues.incr}{" "}{this.props.habitValues.unit}
							</div>
							<div id="manualInput">
								<input
									className="text-center underline font-semibold text-4xl w-20"
									id="manualInputField"
									name="dailyTotal"
									value={this.props.dailyTotal}
									onChange={this.props.handleManualInput}
								/>
							</div>
							<div id="plusButton" className="flex" onClick={this.props.handlePlusButton}>
								{this.props.habitValues.incr}{" "}{this.props.habitValues.unit}<PlusButton />
							</div>
						</div>
						<div id="presetButtonsBar" className="flex justify-around text-center font-bold rounded-xl mb-2 px-4">
							{this.props.habitValues.presets.map((value, index) => <PresetButton key={index} handlePresetButton={this.props.handlePresetButton} valueText={value.valueText} value={value.value} />)}
						</div>

						<div id="addButton" className="h-16  shadow-xl rounded-xl my-4 px-4 bg-white">
							<div className={this.props.cssAddButton} onClick={this.props.handleAddButton}>Add</div>
						</div>
					</div>
					:
					<div id="cardBottomHidden"></div>
				}
			</div>
		)
	}
}
