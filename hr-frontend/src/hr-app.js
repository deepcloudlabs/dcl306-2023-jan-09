import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Card from "./component/common/card";
import {useHr, useHrDispatch} from "./provider/hr-provider";
import EmployeeForm from "./component/hr/employee-form";
import Table from "./component/common/table";
import TableHead from "./component/common/table-head";
import TableBody from "./component/common/table-body";

function HrApp() {
    const hr = useHr();
    const hrDispatch = useHrDispatch();

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
                        <TableHead columns="No,Photo,Identity,Full Name,Salary,IBAN,Birth Year,Department,Full-time?"></TableHead>
                        <TableBody></TableBody>
                    </Table>
                </CardBody>
            </Card>
        </Container>

    );
}

export default HrApp;
