import WaterCheckmark from '../../components/HabitCheckmarks/WaterCheckmark'
import SleepCheckmark from '../../components/HabitCheckmarks/SleepCheckmark'
import ExerciseCheckmark from '../../components/HabitCheckmarks/ExerciseCheckmark'

export default function DailyHabitProgress(props) {
	return (
		<div className="dailyHabitProgress pl-1">
			<div className="progressIndicator ml-1 mt-1">
                {(props.progressIndicator > 0) 
                ? 
                <div>{(props.habitName === "Water")
                    ?
                    <WaterCheckmark />
                    :
                        (props.habitName === "Sleep")
                        ?
                        <SleepCheckmark />
                        :
                        <ExerciseCheckmark />
                }</div>
                :
                ""
                }
            </div>
            <div className="text-center font-semibold mt-1">
                {props.dayText}
            </div>
		</div>
	)
}