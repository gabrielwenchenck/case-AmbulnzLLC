import { OrderDatabase } from "../database/OrderDatabase";
import { ParamsError } from "../errors/ParamsError";
import { IdGenerator } from "../services/IdGenerator";
import {
  ICreateOrderInputDTO,
  ICreateOrderOutputDTO,
  IOrderItemDB,
} from "./../models/Order";
export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private idGenerator: IdGenerator
  ) {}

  public createOrder = async (
    input: ICreateOrderInputDTO
  ): Promise<ICreateOrderOutputDTO> => {
    const pizzasInput = input.pizzas;

    if (pizzasInput.length === 0) {
      throw new ParamsError("Selecione pelo menos uma pizza");
    }

  

    const pizzas = pizzasInput.map((pizza)=>{
      if (pizza.quantity <= 0) {
        throw new ParamsError("A quantidade mínima de pizzas é 1");
      }
      return{
        ...pizza,
        price: null
      }
    })

    const orderId = this.idGenerator.generate();

    const itemId = this.idGenerator.generate();

    await this.orderDatabase.createOrder(orderId);

    for (let pizza of pizzas) {
      const orderItem: IOrderItemDB = {
        id: itemId,
        pizza_name: pizza.name,
        quantity: pizza.quantity,
        order_id: orderId,
      };
      await this.orderDatabase.insertOrderItem(orderItem)
      const price = await this.orderDatabase.getPrice(pizza.name)

      pizza.price = price
    }



    

    const response: ICreateOrderOutputDTO = {
      message: "Pedido realizado com sucesso",order:{id: orderId, pizzas:[],total:}
    };
    return response;
  };
}
