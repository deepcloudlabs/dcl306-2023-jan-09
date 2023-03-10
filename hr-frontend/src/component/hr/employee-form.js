import {useHr, useHrDispatch} from "../../provider/hr-provider";
import InputText from "../common/input-text";
import SelectBox from "../common/select-box";
import CheckBox from "../common/check-box";
import Photo from "../common/photo";
import Button from "../common/button";

export default function EmployeeForm() {
    const hr = useHr();
    const hrDispatch = useHrDispatch();

    //region FIRE EMPLOYEE
    function fireEmployee() {
        fetch(`http://localhost:4001/employees/${hr.employee.identityNo}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(employee => hrDispatch({type: "FIRE_EMPLOYEE", success: true, employee}))
            .catch(error => hrDispatch({type: "FIRE_EMPLOYEE", success: false, error}))
    }
    //endregion

    //region HIRE EMPLOYEE
    function hireEmployee() {
        fetch("http://localhost:4001/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(hr.employee)
        }).then(res => res.json())
            .then(result => {
                hrDispatch({type: "HIRE_EMPLOYEE", success: true, result});
            }).catch(error => {
            hrDispatch({type: "HIRE_EMPLOYEE", success: false, error});
        })
    }

    //endregion

    //region UPDATE EMPLOYEE
    function updateEmployee() {
        fetch("http://localhost:4001/employees", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(hr.employee)
        }).then(res => res.json())
            .then(result => {
                hrDispatch({type: "UPDATE_EMPLOYEE", success: true, result});
            }).catch(error => {
            hrDispatch({type: "UPDATE_EMPLOYEE", success: false, error});
        })
    }
    //endregion

    //region FIND EMPLOYEE BY IDENTITY
    function findEmployeeByIdentity() {
        fetch(`http://localhost:4001/employees/${hr.employee.identityNo}`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(employee => hrDispatch({type: "FIND_EMPLOYEE", success: true, employee}))
            .catch(error => hrDispatch({type: "FIND_EMPLOYEE", success: false, error}))
    }

    //endregion

    //region FIND ALL EMPLOYEES
    function findAllEmployees() {
        fetch(`http://localhost:4001/employees`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json())
            .then(employees => hrDispatch({type: "FIND_ALL_EMPLOYEES", success: true, employees}))
            .catch(error => hrDispatch({type: "FIND_ALL_EMPLOYEES", success: false, error}))
    }
    //endregion

    function handleInputChange(event) {
        hrDispatch({type: "INPUT_CHANGE", event});
    }

    function handleCheckboxChange(event) {
        hrDispatch({type: "INPUT_CHANGE_CHECKBOX", event});
    }

    function handlePhotoChange(imageData) {
        hrDispatch({type: "PHOTO_CHANGE", imageData});
    }

    return (
        <>
            <InputText value={hr.employee.identityNo}
                       label="Identity No"
                       changeHandler={handleInputChange}
                       id="identityNo">
                <Button label="Find By Identity"
                        bgColor="bg-success"
                        clickFunction={findEmployeeByIdentity}></Button>
                <Button label="Fire Employee"
                        bgColor="bg-danger"
                        clickFunction={fireEmployee}></Button>
            </InputText>
            <InputText value={hr.employee.fullname}
                       label="Full Name"
                       changeHandler={handleInputChange}
                       id="fullname"></InputText>
            <InputText value={hr.employee.salary}
                       label="Salary"
                       changeHandler={handleInputChange}
                       id="salary"></InputText>
            <InputText value={hr.employee.iban}
                       label="Iban"
                       changeHandler={handleInputChange}
                       id="iban"></InputText>
            <InputText value={hr.employee.birthYear}
                       label="Birth Year"
                       changeHandler={handleInputChange}
                       id="birthYear"></InputText>
            <SelectBox value={hr.employee.department}
                       label="Department"
                       options={["IT", "Sales", "Finance", "HR"]}
                       changeHandler={handleInputChange}
                       id="department"></SelectBox>
            <Photo value={hr.employee.photo}
                   label="Photo"
                   changeHandler={handlePhotoChange}
                   id="photo"></Photo>
            <CheckBox value={hr.employee.fulltime}
                      label="Full-time?"
                      changeHandler={handleCheckboxChange}
                      id="fulltime"></CheckBox>
            <div className="mb-3">
                <Button label="Find All"
                        bgColor="bg-success"
                        clickFunction={findAllEmployees}></Button>
                <Button label="Hire Employee"
                        bgColor="bg-warning"
                        clickFunction={hireEmployee}></Button>
                <Button label="Update Employee"
                        bgColor="bg-warning"
                        clickFunction={updateEmployee}></Button>
            </div>
        </>
    );
}