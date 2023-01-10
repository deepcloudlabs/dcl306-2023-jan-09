export default function Badge({label, id, value, bgColor}){
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>{label}: </label>
            <span id={id} className={"badge ".concat(bgColor)}>{value}</span>
        </div>
    );
}