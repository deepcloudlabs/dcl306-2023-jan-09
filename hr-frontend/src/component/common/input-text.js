export default function InputText({label, id, value, changeHandler}) {
    return (
        <div className="form-floating mb-3">
            <input type="text"
                   id={id}
                   name={id}
                   value={value}
                   onChange={changeHandler}
                   className="form-control"></input>
            <label className="form-label" htmlFor={id}>{label}</label>
        </div>
    );
}