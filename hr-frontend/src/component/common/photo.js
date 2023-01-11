export default function Photo({value,changeHandler,label,id}){

    return(
        <div className="mb-3">
            <img className="img-thumbnail" src={value}></img>
        </div>
    );
}