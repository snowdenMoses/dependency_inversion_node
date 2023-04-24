"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(routes) {
        this.port = 3004;
        this.app = (0, express_1.default)();
        this.initializeServer = (routes) => {
            this.app.use((0, cors_1.default)());
            for (let route of routes) {
                this.app.use("/", route.router);
            }
            this.app.listen(this.port, () => {
                console.log(`Listening on port ${this.port}`);
            });
        };
        this.initializeServer(routes);
    }
}
exports.default = App;
