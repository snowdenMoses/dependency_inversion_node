import Data from "./data"
import { IEmployee, ISingleEmployeeRecords } from "./employee.interface"

class Employeeservice implements IEmployee {
    public getEmployeeThatAreMales = async (): Promise<ISingleEmployeeRecords[]>  => {
        const malesRecord = Data.filter((record) => record.sex === "male")
        return malesRecord
    }
    public getEmployeeThatAreFemales = async(): Promise<ISingleEmployeeRecords[]>=>{
        const femalesRecord = Data.filter((record) => record.sex === "female")
        return femalesRecord
    }
}
export default Employeeservice