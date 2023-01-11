export default function Table({children}){
    return (
        <table className="table table-bordered table-responsive table-hover">
            {children}
        </table>
    );
}