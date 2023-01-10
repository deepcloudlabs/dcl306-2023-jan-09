export default function InputText({id,value,changeHandler}){
    return (
        <input type="text"
               id={id}
               name={id}
               value={value}
               onChange={changeHandler}
               className="form-control"></input>
    );
}