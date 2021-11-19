export default function PresetButton(props) {
    return (
        <div className="mx-2 text-center pt-3 rounded-xl h-12 w-3/4 bg-gray-200" onClick={() => props.handlePresetButton(props.value)}>
            {props.valueText}
        </div>
    )
}