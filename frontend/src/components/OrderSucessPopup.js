import styled from "styled-components";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  transform: translate(-50%, -50%);
  width: auto;
  padding: 1em;
  background-color: white;

  .close-popup {
    position: absolute;
    top: 0;
    left: 96%;
    padding: 1px 5px;
    width: auto;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    :hover {
      cursor: pointer;
      background-color: red;
      color: white;
    }
  }
`;

function OrderSucessPopup(props) {
  const { order, closePopup } = props;
  return (
    <ContainerDiv>
      <h2>Pedido realizado com sucesso!</h2>
      <h3>Resumo do Pedido</h3>
      <p>Id do pedido: {order.id} </p>
      {order.pizzas.map((pizza) => (
        <p key={pizza.name}>
          Pizza {pizza.name} -{" "}
          {pizza.price.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}{" "}
          x {pizza.quantity}
        </p>
      ))}
      <p>
        Total pago:{" "}
        {order.total.toLocaleString("na-us", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="close-popup" onClick={closePopup}>
        <span>x</span>
      </div>
    </ContainerDiv>
  );
}

export default OrderSucessPopup;
