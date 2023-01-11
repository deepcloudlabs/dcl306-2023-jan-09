function handleInputFileChange(event,{changeHandler}){
    const filename = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
        changeHandler(e.target.result);
    }
    fileReader.readAsDataURL(filename);
}
export default function Photo({value, changeHandler, label, id}) {

    return (
        <div className="mb-3">
            <div className="input-group">
                <label htmlFor={id}
                       className="input-group-text">{label}</label>
                <img className="img-thumbnail" src={value}></img>
                <label>
                    <input type="file"
                           onChange={(event) => handleInputFileChange(event, {changeHandler})}
                           style={{'display': 'none'}}/>
                    <span className="btn btn-success">File</span>
                </label>
            </div>
        </div>
    );
}