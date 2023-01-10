import FormGroup from "./form-group";

export default function Badge({label, id, value, bgColor}){
    return (
        <FormGroup>
            <label className="form-label" htmlFor={id}>{label}: </label>
            <span id={id} className={"badge ".concat(bgColor)}>{value}</span>
        </FormGroup>
    );
}