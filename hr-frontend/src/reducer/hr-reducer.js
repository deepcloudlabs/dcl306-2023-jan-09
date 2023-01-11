import Employee from "../model/employee";

export default function hrReducer(hr, action) { // pure function
    let employee = {...hr.employee};
    let employees = [...hr.employees];
    switch (action.type) {
        case "INPUT_CHANGE":
            const inputName = action.event.target.name;
            employee[inputName] = action.event.target.value;
            break;
        case "INPUT_CHANGE_CHECKBOX":
            const checkBoxName = action.event.target.name;
            employee[checkBoxName] = !employee[checkBoxName];
            break;
        case "PHOTO_CHANGE":
            employee.photo = action.imageData;
            break;
        case "FIND_ALL_EMPLOYEES":
            if (action.success) {
                employees = action.employees;
            } else {
                //TODO: handle rest call error
            }
            break;
        case "FIND_EMPLOYEE":
            if (action.success) {
                employee = new Employee(action.employee);
            } else {
                //TODO: handle rest call error
            }
            break;
        case "HIRE_EMPLOYEE":
            break;
        case "FIRE_EMPLOYEE":
            if (action.success) {
                employee = new Employee(action.employee);
                employees = employees.filter(emp => emp.identityNo != employee.identityNo);
            } else {
                //TODO: handle rest call error
            }
            break;
        case "UPDATE_EMPLOYEE":
            break;
    }
    return {employee, employees};
}