export default function TableHead({columns}){
    return (
        <thead>
           <tr>
               {
                   columns.split(",").map(column => <th key={column}>{column}</th>)
               }
           </tr>
        </thead>
    );
}