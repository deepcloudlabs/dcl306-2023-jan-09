import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Card from "./component/common/card";
import {useEmployees, useHr, useHrDispatch} from "./provider/hr-provider";
import EmployeeForm from "./component/hr/employee-form";
import Table from "./component/common/table";
import TableHead from "./component/common/table-head";
import TableBody from "./component/common/table-body";
import Badge from "./component/common/badge";
import Button from "./component/common/button";

function HrApp() {
    const employees = useEmployees();
    const hrDispatch = useHrDispatch();

    function fireEmployee(identityNo) {
        fetch(`http://localhost:4001/employees/${identityNo}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(employee => hrDispatch({type: "FIRE_EMPLOYEE", success: true, employee}))
            .catch(error => hrDispatch({type: "FIRE_EMPLOYEE", success: false, error}))
    }

    return (
        <Container>
            <p></p>
            <Card>
                <CardHeader title="Employee"></CardHeader>
                <CardBody>
                    <EmployeeForm></EmployeeForm>
                </CardBody>
            </Card>
            <p></p>
            <Card>
                <CardHeader title="Employees"></CardHeader>
                <CardBody>
                    <Table>
                        <TableHead columns="No,Photo,Identity,Full Name,Salary,IBAN,Birth Year,Department,Full-time?,Operations"></TableHead>
                        <TableBody>
                            {
                                employees.map( (emp,index) =>
                                    <tr key={emp.identityNo}>
                                        <td>{index+1}</td>
                                        <td><img src={emp.photo} className="img-thumbnail"></img></td>
                                        <td>{emp.identityNo}</td>
                                        <td>{emp.fullname}</td>
                                        <td>{emp.salary}</td>
                                        <td>{emp.iban}</td>
                                        <td>{emp.birthYear}</td>
                                        <td>{emp.department}</td>
                                        <td>{emp.fulltime ? 'FULL-TIME' : 'PART-TIME'}</td>
                                        <td>                <Button label="Fire Employee"
                                                                    bgColor="bg-danger"
                                                                    clickFunction={() => fireEmployee(emp.identityNo)}></Button></td>
                                    </tr>
                                )
                            }
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>
        </Container>

    );
}

export default HrApp;
