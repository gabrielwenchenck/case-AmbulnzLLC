"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaBusiness = void 0;
const Pizza_1 = require("./../models/Pizza");
class PizzaBusiness {
    constructor(pizzaDatabase, idGenerator) {
        this.pizzaDatabase = pizzaDatabase;
        this.idGenerator = idGenerator;
        this.getPizzas = async () => {
            const pizzasDB = await this.pizzaDatabase.getPizzas();
            const pizzas = [];
            for (const pizzaDB of pizzasDB) {
                const pizza = new Pizza_1.Pizza(pizzaDB.name, pizzaDB.price, []);
                const ingredients = await this.pizzaDatabase.getIngredients(pizzaDB.name);
                pizza.setIngredients(ingredients);
                pizzas.push(pizza);
            }
            const response = {
                message: "Pizzas retornadas com sucesso",
                pizzas: pizzas.map((pizza) => ({
                    name: pizza.getName(),
                    price: pizza.getPrice(),
                    ingredients: pizza.getIngredients(),
                })),
            };
            return response;
        };
    }
}
exports.PizzaBusiness = PizzaBusiness;
//# sourceMappingURL=PizzaBusiness.js.map