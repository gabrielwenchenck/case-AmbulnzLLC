"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaRouter = void 0;
const PizzaBusiness_1 = require("./../business/PizzaBusiness");
const PizzaController_1 = require("./../controller/PizzaController");
const express_1 = require("express");
const PizzaDatabase_1 = require("../database/PizzaDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
exports.pizzaRouter = (0, express_1.Router)();
const pizzaController = new PizzaController_1.PizzaController(new PizzaBusiness_1.PizzaBusiness(new PizzaDatabase_1.PizzaDatabase(), new IdGenerator_1.IdGenerator()));
exports.pizzaRouter.get("/", pizzaController.getPizzas);
//# sourceMappingURL=pizzaRouter.js.map