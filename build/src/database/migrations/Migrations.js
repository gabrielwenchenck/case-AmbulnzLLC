"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderDatabase_1 = require("./../OrderDatabase");
const PizzaDatabase_1 = require("./../PizzaDatabase");
const BaseDatabase_1 = require("../BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.execute = async () => {
            try {
                console.log("Creating tables...");
                await this.createTables();
                console.log("Tables created successfully.");
                console.log("Populating tables...");
                await this.insertData();
                console.log("Tables populated successfully.");
                console.log("Migrations completed.");
            }
            catch (error) {
                console.log("FAILED! Error in migrations...");
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
            finally {
                console.log("Ending connection...");
                BaseDatabase_1.BaseDatabase.connection.destroy();
                console.log("Connection closed graciously.");
            }
        };
        this.createTables = async () => {
            await BaseDatabase_1.BaseDatabase.connection.raw(`

      
      DROP TABLE IF EXISTS ${OrderDatabase_1.OrderDatabase.TABLE_ORDER_ITEMS};
      DROP TABLE IF EXISTS ${OrderDatabase_1.OrderDatabase.TABLE_ORDERS};
      DROP TABLE IF EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS_INGREDIENTS};
      DROP TABLE IF EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_INGREDIENTS};
      DROP TABLE IF EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS};
    
      CREATE TABLE IF NOT EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS} (
        name VARCHAR(255) PRIMARY KEY,
          price DECIMAL(3,2) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_INGREDIENTS} (
        name VARCHAR(255) PRIMARY KEY
      );

      CREATE TABLE IF NOT EXISTS ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS_INGREDIENTS} (
        pizza_name VARCHAR(255) NOT NULL,
          ingredient_name VARCHAR(255) NOT NULL,
          FOREIGN KEY (pizza_name) REFERENCES ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS}(name),
          FOREIGN KEY (ingredient_name) REFERENCES ${PizzaDatabase_1.PizzaDatabase.TABLE_INGREDIENTS}(name)
      );

      CREATE TABLE IF NOT EXISTS ${OrderDatabase_1.OrderDatabase.TABLE_ORDERS} (
        id VARCHAR(255) PRIMARY KEY
      );

      CREATE TABLE IF NOT EXISTS ${OrderDatabase_1.OrderDatabase.TABLE_ORDER_ITEMS} (
        id VARCHAR(255) PRIMARY KEY,
        pizza_name VARCHAR(255) NOT NULL,
          quantity TINYINT,
          FOREIGN KEY (pizza_name) REFERENCES ${PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS}(name)
      );
        `);
        };
        this.insertData = async () => {
        };
    }
}
const migrations = new Migrations();
migrations.execute();
//# sourceMappingURL=Migrations.js.map