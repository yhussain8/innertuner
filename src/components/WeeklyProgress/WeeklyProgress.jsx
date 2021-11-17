import DailyProgress from '../../components/DailyProgress/DailyProgress'

export default function WeeklyProgress(props) {
	return (
		<div className="weeklyProgress border border-black flex justify-evenly">
			{props.weeklyProgress.map((day, index) => <DailyProgress key={index} dayText={Object.keys(day)[0]} progressIndicator={day[Object.keys(day)[0]]} />)}
		</div>
	)
}