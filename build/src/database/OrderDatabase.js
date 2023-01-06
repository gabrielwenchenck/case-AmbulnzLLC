"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class OrderDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toOrderDBModel = (order) => {
            const orderDB = {
                id: order.getId(),
            };
            return orderDB;
        };
    }
}
exports.OrderDatabase = OrderDatabase;
OrderDatabase.TABLE_ORDERS = "Amb_Orders";
OrderDatabase.TABLE_ORDER_ITEMS = "Amb_Order_Items";
//# sourceMappingURL=OrderDatabase.js.map