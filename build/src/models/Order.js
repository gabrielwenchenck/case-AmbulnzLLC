"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, orderItems) {
        this.id = id;
        this.orderItems = orderItems;
        this.getId = () => {
            return this.id;
        };
        this.getOrderItems = () => {
            return this.orderItems;
        };
        this.setOrderItems = (newOrderItems) => {
            this.orderItems = newOrderItems;
        };
        this.addOrderItem = (newOrderItem) => {
            this.orderItems.push(newOrderItem);
        };
        this.deleteOrderItem = (id) => {
            return this.orderItems.filter((orderItem) => orderItem.id !== id);
        };
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map