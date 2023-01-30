"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaController = void 0;
const BaseError_1 = require("../errors/BaseError");
class PizzaController {
    constructor(pizzaBusiness) {
        this.pizzaBusiness = pizzaBusiness;
        this.getPizzas = async (req, res) => {
            try {
                const response = await this.pizzaBusiness.getPizzas();
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro ao buscar" });
            }
        };
    }
}
exports.PizzaController = PizzaController;
//# sourceMappingURL=PizzaController.js.map