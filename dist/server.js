"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const employee_controller_1 = __importDefault(require("./employee.controller"));
const employee_service_1 = __importDefault(require("./employee.service"));
const employee_route_1 = __importDefault(require("./employee.route"));
const employeeService = new employee_service_1.default();
const employeeController = new employee_controller_1.default(employeeService);
const employeeroute = new employee_route_1.default(employeeController);
const server = new app_1.default([employeeroute]);
