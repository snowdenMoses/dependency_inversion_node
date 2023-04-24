"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class EmployeeRoute {
    constructor(employeeController) {
        this.router = (0, express_1.Router)();
        this.initializeRouter = () => {
            this.router.get("/males", this.employeeController.getEmployeeThatAreMales);
            this.router.get("/females", this.employeeController.getEmployeeThatAreFemales);
        };
        this.employeeController = employeeController;
        this.initializeRouter();
    }
}
exports.default = EmployeeRoute;
