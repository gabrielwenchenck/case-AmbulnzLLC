import {
  Order,
  IOrderDB,
  ICreateOrderInputDTO,
  IOrderItemDB,
} from "./../models/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDERS = "Amb_Orders";
  public static TABLE_ORDER_ITEMS = "Amb_Order_Items";

  public createOrder = async (orderId: string): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS).insert({
      id: orderId,
    });
  };

  public insertOrderItem = async (orderItem: IOrderItemDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEMS).insert({
      orderItem,
    });
  };
}
