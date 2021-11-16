import DailyProgress from '../../components/DailyProgress/DailyProgress'

export default function WeeklyProgress(props) {
	return (
		<div className="wk">
			<div className="weeklyProgress flex justify-around my-6">
				{props.weeklyProgress.map((day) => <DailyProgress dayText={Object.keys(day)[0]} progressIndicator={day[Object.keys(day)[0]]} />)}
			
			</div>
			
		</div>
	)
}