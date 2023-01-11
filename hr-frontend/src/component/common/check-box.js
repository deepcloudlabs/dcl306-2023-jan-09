export default function CheckBox({value,options,changeHandler,label,id}){
    return (
        <div className="mb-3">
            <div className="form-check">
            <label className="form-check-label" htmlFor={id}>{label}
                <input type="checkbox"
                        id={id}
                        name={id}
                        checked={value}
                        onChange={changeHandler}
                        className="form-check-input">
                </input>
            </label>

            </div>
        </div>
    );
}