"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBusiness = void 0;
const NotFoundError_1 = require("../errors/NotFoundError");
const ParamsError_1 = require("../errors/ParamsError");
const Order_1 = require("./../models/Order");
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
                const price = await this.orderDatabase.getPrice(pizza.name);
                if (!price) {
                    throw new NotFoundError_1.NotFoundError("Pizza não encontrada");
                }
                pizza.price = price;
            }
            const orderId = this.idGenerator.generate();
            await this.orderDatabase.createOrder(orderId);
            for (let pizza of pizzas) {
                const orderItem = {
                    id: this.idGenerator.generate(),
                    pizza_name: pizza.name,
                    quantity: pizza.quantity,
                    order_id: orderId,
                };
                await this.orderDatabase.insertOrderItem(orderItem);
            }
            const total = pizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
            const response = {
                message: "Pedido realizado com sucesso",
                order: {
                    id: orderId,
                    pizzas,
                    total,
                },
            };
            return response;
        };
        this.getOrders = async () => {
            const ordersDB = await this.orderDatabase.getOrders();
            const orders = [];
            for (let orderDB of ordersDB) {
                const order = new Order_1.Order(orderDB.id, []);
                const orderItemsDB = await this.orderDatabase.getOrderItem(order.getId());
                for (let orderItemDB of orderItemsDB) {
                    const price = await this.orderDatabase.getPrice(orderItemDB.pizza_name);
                    orderItemDB.price = price;
                }
                order.setOrderItems(orderItemsDB);
                orders.push(order);
            }
            const response = {
                orders: orders.map((order) => ({
                    id: order.getId(),
                    pizzas: order.getOrderItems().map((item) => ({
                        name: item.pizza_name,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                    total: order.getTotal(),
                })),
            };
            return response;
        };
    }
}
exports.OrderBusiness = OrderBusiness;
//# sourceMappingURL=orderBusiness.js.map