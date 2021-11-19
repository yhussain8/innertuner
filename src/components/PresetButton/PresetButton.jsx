export default function PresetButton(props) {
    return (
        <div className="mx-2 border rounded-xl h-12 w-3/4 bg-gray-200" onClick={() => props.handleStdInc(props.value)}>
            {props.valueText}
        </div>
    )
}