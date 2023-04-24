import express, {Response, Request}  from "express"
import cors  from "cors"
import EmployeeRoute from "./employee.route"
import Employeeservice from "./employee.service"
import EmployeeController from "./employee.controller"


class App{
    private port = 3004
    private app = express()
    
    constructor(routes: any){
        this.initializeServer(routes)
    }
    private initializeServer=(routes: any)=>{
        this.app.use(cors())
        for(let route of routes){
            this.app.use("/", route.router)
        }
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }
}

export default App



