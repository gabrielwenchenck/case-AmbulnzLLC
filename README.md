# Projeto Ambulnz

Bem-vindo à documentação do projeto Ambulnz! Neste documento, você encontrará informações detalhadas sobre a implementação e configuração de uma aplicação de pizzaria, que inclui um backend e um frontend simples, para serem implantados na plataforma de nuvem da Amazon Web Services (AWS).

## Descrição do Projeto

Este projeto foi desenvolvido para fins de demonstração e aprendizado, com o objetivo de mostrar como construir e implantar uma aplicação web completa na AWS, usando várias ferramentas e serviços disponíveis na plataforma. O projeto é composto por um backend, que é responsável pela lógica de negócios e gerenciamento dos pedidos de pizzas, e um frontend, que é a interface do usuário para fazer pedidos e acompanhar o status dos pedidos.

A API de backend foi construída usando uma estrutura de desenvolvimento de aplicativos web moderna, como o Node.js, Express e MySQL, para criar uma API RESTful que permite adicionar pizzas ao carrinho, remover pizzas do carrinho e finalizar pedido. O frontend é simples e foi desenvolvido usando o framework React.

A implantação da aplicação foi feita na AWS, aproveitando uma série de serviços da plataforma, como o Amazon EC2 para hospedar o backend e o frontend. 

## Link
http://ec2-54-204-83-98.compute-1.amazonaws.com:3000/

## Entidades (Typescript)

### Pizza (pizzas)

Representa as pizzas nossa aplicação. As pizzas são compostas pelas seguintes características:

- `name (string)`

- `quantity: quantidade (number)`

- `price: preço da pizza (string)`

- `ingredients: ingredientes da pizza (string[])`

### Orders (pedidos)

Representa os pedidos. Cada pedido é composto por um array que contém todas as pizzas e o total:

- `id (string) gerado pela própria aplicação`

- `pizzas (string[]) array com todas as pizzas, bem como quantidades e preços`

- `total (number) valor total do pedido`


## Tabelas (MySQL)

### Amb_Pizzas

- `name VARCHAR(255) chave primária e não-nulo`
- `price DECIMAL(3,2), não-nulo`

### Amb_Orders

- `id VARCHAR(255) chave primária e gerado pela própria aplicação`

### Amb_Ingredients

- `name VARCHAR(255) chave primária`

### Amb_Pizzas_Ingredients

- `pizza_name VARCHAR(255) não nulo`
- `ingredient_name VARCHAR(255) não nulo`
- `pizza_name VARCHAR(255) chave estrangeira referenciando ao nome de Amb_Pizzas`
- `ingredient_name VARCHAR(255) chave estrangeira referenciando ao nome de Amb_Ingredients`

### Amb_Order_Items

- `id VARCHAR(255) chave primária e gerado pela própria aplicação`
- `pizza_name VARCHAR(255) não nulo`
- `quantity TINYINT`
- `pizza_name VARCHAR(255) chave estrangeira referenciando ao nome de Amb_Pizzas`
- `order_id VARCHAR(255) chave estrangeira referenciando ao id de Amb_Orders`


## Instruções

### Instalando as dependências

- `npm install:`
  Instala todas as dependências listadas no `package.json`.

### Populando as tabelas

- `npm run migrations`
  Cria e popula as tabelas com dados mockados de usuários e shows.
  - Esse script deve ser executado apenas uma única vez
  - Se executado uma segunda vez, ele dropa as tabelas e reseta os dados mockados

### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12
```

### Executar o projeto:

- `npm run dev`:
  Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

## Funcionalidades

**1. Retornar todas as pizzas**

- **Método:** `GET`
- **Caminho:** `/api/pizzas`
- **Entrada:** `nenhuma`
- **Saída:** `mensagem de pizzas retornadas com sucesso. Array com todas as pizzas`


**2. Criar pedido**

- **Método:** `POST `
- **Caminho:** `api/orders`
- **Entrada:** `array de objetos contendo pizzas e quantidades`
  **Saída:** `mensagem de pedido realizado com sucesso. Id do pedido. Array com todas as pizzas`
- **Validações e regras de negócio:**
  - `deve ser selecionado pelo menos uma pizza`


**3. Buscar pedidos**

- **Método:** `GET `
- **Caminho:** `/api/orders`
- **Entrada:** `nenhuma`
  **Saída:** `uma lista com todos os pedidos`



## Documentação (links)

- [Postman](https://documenter.getpostman.com/view/21578696/2s93Xu3Rgj)



## Tecnologias Utilizadas

- NodeJS
- TypeScript
- MySQL
- Knex
- Express
- Cors
- Markdown
- React
- Styled Components
- AWS

## Autor

- - [Gabriel Wenchenck](https://github.com/gabrielwenchenck)

