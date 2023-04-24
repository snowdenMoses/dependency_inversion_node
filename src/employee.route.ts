import { Router, Route } from "express";
import { IEmployee } from "./employee.interface";

class EmployeeRoute {
    public router  =  Router()
    private employeeController;
    constructor( employeeController: any){
        this.employeeController = employeeController
        this.initializeRouter()
    }
    private initializeRouter = () =>{
        this.router.get("/males", this.employeeController.getEmployeeThatAreMales)
        this.router.get("/females", this.employeeController.getEmployeeThatAreFemales)
    }
}

export default EmployeeRoute