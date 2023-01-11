import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Card from "./component/common/card";
import {useHr, useHrDispatch} from "./provider/hr-provider";
import EmployeeForm from "./component/hr/employee-form";

function HrApp() {
    const hr = useHr();
    const hrDispatch = useHrDispatch();

    return (
        <Container>
            <Card>
                <CardHeader title="Employee"></CardHeader>
                <CardBody>
                    <EmployeeForm></EmployeeForm>
                </CardBody>
            </Card>
        </Container>

    );
}

export default HrApp;
