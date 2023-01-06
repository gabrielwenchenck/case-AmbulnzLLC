"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PizzaDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toPizzaDBModel = (pizza) => {
            const pizzaDB = {
                name: pizza.getName(),
                price: pizza.getPrice(),
            };
            return pizzaDB;
        };
    }
}
exports.PizzaDatabase = PizzaDatabase;
PizzaDatabase.TABLE_PIZZAS = "Amb_Pizzas";
PizzaDatabase.TABLE_INGREDIENTS = "Amb_Ingredients";
PizzaDatabase.TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients";
//# sourceMappingURL=PizzaDatabase.js.map