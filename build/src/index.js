"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const pingRouter_1 = require("./router/pingRouter");
const pizzaRouter_1 = require("./router/pizzaRouter");
const orderRouter_1 = require("./router/orderRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
app.use("/api/ping", pingRouter_1.pingRouter);
app.use("/api/pizzas", pizzaRouter_1.pizzaRouter);
app.use("/api/orders", orderRouter_1.orderRouter);
//# sourceMappingURL=index.js.map