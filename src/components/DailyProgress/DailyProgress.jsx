export default function DailyProgress(props) {
	return (
		<div className="dailyProgress border border-black">
			<div className="progressIndicator">
                {(props.progressIndicator === 1) ? '🙁' : ( (props.progressIndicator === 2) ? '😐' : ((props.progressIndicator === 3) ? '🙂' : '⚫️'))}
            </div>
            <div className="dayText">
                {props.dayText}
            </div>
		</div>
	)
}