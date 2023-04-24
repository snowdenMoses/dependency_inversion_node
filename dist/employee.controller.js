"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeController {
    constructor(employee) {
        this.employee = employee;
        this.getEmployeeThatAreMales = (_, res) => __awaiter(this, void 0, void 0, function* () {
            const malesRecord = yield this.employee.getEmployeeThatAreMales();
            res.status(200).json({ data: malesRecord });
        });
        this.getEmployeeThatAreFemales = (_, res) => __awaiter(this, void 0, void 0, function* () {
            const femalesRecord = yield this.employee.getEmployeeThatAreFemales();
            res.status(200).json({ data: femalesRecord });
        });
    }
}
exports.default = EmployeeController;
