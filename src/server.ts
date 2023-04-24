import express, {Response, Request}  from "express"
import cors  from "cors"
import EmployeeRoute from "./employee.route"
import Employeeservice from "./employee.service"
import EmployeeController from "./employee.controller"


class Server{
    private port = 3004
    private app = express()
    
    constructor(route: any){
        this.initializeServer(route)
    }
    private initializeServer=(route: any)=>{
        this.app.use(cors())
        this.app.use("/",route.router)
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }
}


const employeeService = new Employeeservice()
const employeeController = new EmployeeController(employeeService)
const employeeroute = new EmployeeRoute(employeeController)
const server = new Server(employeeroute)


