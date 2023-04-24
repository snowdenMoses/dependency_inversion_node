import App from "./app"
import EmployeeController from "./employee.controller"
import Employeeservice from "./employee.service"
import EmployeeRoute from "./employee.route"

const employeeService = new Employeeservice()
const employeeController = new EmployeeController(employeeService)
const employeeroute = new EmployeeRoute(employeeController)
const server = new App([employeeroute])