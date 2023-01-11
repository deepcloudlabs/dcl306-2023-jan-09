import {useHr, useHrDispatch} from "../../provider/hr-provider";
import InputText from "../common/input-text";
import SelectBox from "../common/select-box";
import CheckBox from "../common/check-box";
import Photo from "../common/photo";

export default function EmployeeForm(){
    const hr = useHr();
    const hrDispatch = useHrDispatch();

    return (
        <>
            <InputText value={hr.employee.identityNo}
                       label="Identity No"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="identity"></InputText>
            <InputText value={hr.employee.fullname}
                       label="Full Name"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="fullname"></InputText>
            <InputText value={hr.employee.salary}
                       label="Salary"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="salary"></InputText>
            <InputText value={hr.employee.iban}
                       label="Iban"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="iban"></InputText>
            <InputText value={hr.employee.birthYear}
                       label="Birth Year"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="birthYear"></InputText>
            <SelectBox value={hr.employee.department}
                       label="Department"
                       options={["IT", "Sales", "Finance", "HR"]}
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE", event})}
                       id="department"></SelectBox>
            <CheckBox value={hr.employee.fulltime}
                       label="Full-time?"
                       changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE_CHECKBOX", event})}
                       id="fulltime"></CheckBox>
            <Photo value={hr.employee.photo}
                    label="Photo"
                   changeHandler={(event)=>hrDispatch({type: "INPUT_CHANGE_CHECKBOX", event})}
                   id="photo"></Photo>
        </>
    );
}