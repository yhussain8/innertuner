export default function DailyProgress(props) {
	return (
		<div className="dailyProgress border border-black">
			<div className="progressIndicator">
                {props.progressIndicator}
            </div>
            <div className="dayText">
                {props.dayText}
            </div>
		</div>
	)
}