export default function SelectBox({value,options,changeHandler,label,id}){
    return (
        <div className="form-floating mb-3">
            <select type="text"
                   id={id}
                   name={id}
                   value={value}
                   onChange={changeHandler}
                   className="form-control">
                {
                    options.map(name => <option key={name} value={name}>{name}</option>)
                }
            </select>
            <label className="form-label" htmlFor={id}>{label}</label>
        </div>
    );
}