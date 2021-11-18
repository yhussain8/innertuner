import DailyProgress from '../../components/DailyProgress/DailyProgress'

export default function WeeklyProgress(props) {
	return (
		<div className="weeklyProgress  flex justify-evenly mb-6">
			{props.weeklyProgress.map((day, index) => <DailyProgress key={index} dayText={Object.keys(day)[0]} progressIndicator={day[Object.keys(day)[0]]} />)}
		</div>
	)
}