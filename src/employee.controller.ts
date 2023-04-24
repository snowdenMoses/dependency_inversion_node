import { Response, Request } from "express"
import { IEmployee, ISingleEmployeeRecords } from "./employee.interface"

class EmployeeController {
    constructor(private employee: IEmployee) {
    }
    public getEmployeeThatAreMales = async (_: Request, res: Response) => {
        const malesRecord = await this.employee.getEmployeeThatAreMales()
        res.status(200).json({ data: malesRecord })
    }
    public getEmployeeThatAreFemales = async (_: Request, res: Response) => {
        const femalesRecord = await this.employee.getEmployeeThatAreFemales()
        res.status(200).json({ data: femalesRecord })
    }
}

export default EmployeeController