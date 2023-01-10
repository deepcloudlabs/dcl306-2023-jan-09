export default function Button({label,clickFunction,bgColor}){
    return (
        <button className={"btn ".concat(bgColor)}
                onClick={clickFunction}>label</button>
    );
}