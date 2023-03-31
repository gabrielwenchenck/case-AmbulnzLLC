"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBusiness = void 0;
const NotFoundError_1 = require("../errors/NotFoundError");
const ParamsError_1 = require("../errors/ParamsError");
class OrderBusiness {
    constructor(orderDatabase, idGenerator) {
        this.orderDatabase = orderDatabase;
        this.idGenerator = idGenerator;
        this.createOrder = async (input) => {
            const pizzasInput = input.pizzas;
            if (pizzasInput.length === 0) {
                throw new ParamsError_1.ParamsError("Selecione pelo menos uma pizza");
            }
            const pizzas = pizzasInput.map((pizza) => {
                if (pizza.quantity <= 0) {
                    throw new ParamsError_1.ParamsError("A quantidade mínima de pizzas é 1");
                }
                return {
                    ...pizza,
                    price: 0,
                };
            });
            for (let pizza of pizzas) {
            }
            for (let pizza of pizzas) {
                const price = await this.orderDatabase.getPrice(pizza.name);
                if (!price) {
                    throw new NotFoundError_1.NotFoundError("Pizza não encontrada");
                }
                pizza.price = price;
            }
            const orderId = this.idGenerator.generate();
            const itemId = this.idGenerator.generate();
            await this.orderDatabase.createOrder(orderId);
            for (let pizza of pizzas) {
                const orderItem = {
                    id: itemId,
                    pizza_name: pizza.name,
                    quantity: pizza.quantity,
                    order_id: orderId,
                };
                await this.orderDatabase.insertOrderItem(orderItem);
                console.log(orderItem);
                const response = {
                    message: "Pedido realizado com sucesso",
                    order: {
                        id: orderId,
                        pizzas,
                        total: pizzas.reduce((a, b) => a + b.price, 0),
                    },
                };
                return response;
            }
        };
    }
}
exports.OrderBusiness = OrderBusiness;
//# sourceMappingURL=orderBusiness.js.map