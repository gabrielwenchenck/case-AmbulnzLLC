"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const orderBusiness_1 = require("../business/orderBusiness");
const orderController_1 = require("../controller/orderController");
const OrderDatabase_1 = require("../database/OrderDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
exports.orderRouter = (0, express_1.Router)();
const orderController = new orderController_1.OrderController(new orderBusiness_1.OrderBusiness(new OrderDatabase_1.OrderDatabase(), new IdGenerator_1.IdGenerator()));
exports.orderRouter.post("/", orderController.createOrder);
//# sourceMappingURL=orderRouter.js.map