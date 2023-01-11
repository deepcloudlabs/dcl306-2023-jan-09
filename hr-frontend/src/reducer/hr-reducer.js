export default function hrReducer(hr, action){
    const employee = {...hr.employee};
    const employees = [...hr.employees];
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
            
        break;
        case "FIND_EMPLOYEE":
        break;
        case "HIRE_EMPLOYEE":
        break;
        case "FIRE_EMPLOYEE":
        break;
        case "UPDATE_EMPLOYEE":
        break;
    }
    return {employee, employees};
}