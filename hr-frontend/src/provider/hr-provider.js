import {createContext, useContext, useReducer} from "react";
import Employee from "../model/employee";
import {NO_IMAGE} from "../utility/hr-utility";
import HrApp from "../hr-app";
import hrReducer from "../reducer/hr-reducer";

export const HrContext = createContext(null);
export const initialHr = {
    "employee": new Employee({
        "identityNo": "17916156882",
        "fullname": "Jack Bauer",
        "iban": "TR120006247494912325517362",
        "photo": NO_IMAGE,
        "birthYear": 1956,
        "salary": 100_000,
        "department": "IT",
        "fulltime": true
    }),
    employees: []
};
export default function HrProvider() {
    const [hr, hrDispatch] = useReducer(hrReducer, initialHr);
    return (
        <HrContext.Provider value={{hr, hrDispatch}}>
            <HrApp/>
        </HrContext.Provider>
    );
}

export function useHr() {
    const {hr} = useContext(HrContext);
    return hr;
}
export function useEmployees() {
    const {hr} = useContext(HrContext);
    return hr.employees;
}

export function useHrDispatch() {
    const {hrDispatch} = useContext(HrContext);
    return hrDispatch;
}