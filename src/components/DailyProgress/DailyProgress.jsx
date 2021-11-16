export default function DailyProgress(props) {
	return (
        

        
		<div className="dailyProgress">
			<div className="progressIndicator ">{props.progressIndicator}</div>
            <div className="dayTex text-center">{props.dayText}</div>
		</div>
	)
}