import DailyHabitProgress from '../../components/DailyHabitProgress/DailyHabitProgress'

export default function WeeklyHabitProgress(props) {
	return (
		<div className="weeklyProgress flex justify-evenly mb-6">
			{props.weeklyProgress.map((day, index) => <DailyHabitProgress key={index} habitName={props.habitName} dayText={Object.keys(day)[0]} progressIndicator={day[Object.keys(day)[0]]} />)}
		</div>
	)
}