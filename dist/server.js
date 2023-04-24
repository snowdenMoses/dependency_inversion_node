"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const employee_route_1 = __importDefault(require("./employee.route"));
const employee_service_1 = __importDefault(require("./employee.service"));
const employee_controller_1 = __importDefault(require("./employee.controller"));
class Server {
    constructor(route) {
        this.port = 3004;
        this.app = (0, express_1.default)();
        this.initializeServer = (route) => {
            this.app.use((0, cors_1.default)());
            this.app.use("/", route.router);
            this.app.listen(this.port, () => {
                console.log(`Listening on port ${this.port}`);
            });
        };
        this.initializeServer(route);
    }
}
const employeeService = new employee_service_1.default();
const employeeController = new employee_controller_1.default(employeeService);
const employeeroute = new employee_route_1.default(employeeController);
const server = new Server(employeeroute);
