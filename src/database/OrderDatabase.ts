import { Order, IOrderDB } from "./../models/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDERS = "Amb_Orders";
  public static TABLE_ORDER_ITEMS = "Amb_Order_Items";

  public toOrderDBModel = (order: Order): IOrderDB => {
    const orderDB: IOrderDB = {
      id: order.getId(),
    };

    return orderDB;
  };

  // public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
  //   const result: IUserDB[] = await BaseDatabase.connection(
  //     UserDatabase.TABLE_USERS
  //   )
  //     .select()
  //     .where({ email });

  //   return result[0];
  // };

  // public createUser = async (user: User): Promise<void> => {
  //   const userDB = this.toUserDBModel(user);

  //   await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  // };
}
