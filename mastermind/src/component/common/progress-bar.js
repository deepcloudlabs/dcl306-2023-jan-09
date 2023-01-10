export default function({bgColor, value, pbWidth}){
    return (
        <div className="progress">
            <div id="counter"
                 style={{"width": pbWidth}}
                 className={"progress-bar ".concat(bgColor)}>{value}</div>
        </div>
    );
}