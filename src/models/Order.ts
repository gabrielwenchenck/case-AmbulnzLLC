export interface IOrderDB {
  id: string;
}

export interface IOrderItemsDB {
  id: string;
  pizza_name: string;
  quantity: number;
  order_id: string;
}

export interface IOrderItem {
  id: string;
  pizza_name: string;
  quantity: number;
  order_id: string;
}

export class Order {
  constructor(
    private id: string,

    private orderItems: IOrderItem[]
  ) {}

  public getId = () => {
    return this.id;
  };

  public getOrderItems = () => {
    return this.orderItems;
  };

  public setOrderItems = (newOrderItems: IOrderItem[]) => {
    this.orderItems = newOrderItems;
  };

  public addOrderItem = (newOrderItem: IOrderItem) => {
    this.orderItems.push(newOrderItem);
  };

  public deleteIngredient = (id: string) => {
    return this.orderItems.filter((orderItem) => orderItem.id !== id);
  };
}

export interface ICreateOrderInputDTO {
  pizzas: {
    name: string;
    quantity: number;
  }[];
}

export interface ICreateOrderOutputDTO {
  message: "Pedido realizado com sucesso";
  order: {
    id: string;
    pizzas: {
      name: string;
      quantity: number;
      price: number;
    }[];
    total: number;
  };
}
