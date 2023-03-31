import styled from "styled-components";

export const ContainerLi = styled.li`
  display: flex;
`;

function OrderItemCard(props) {
  const { pizza } = props;
  return (
    <ContainerLi>
      <p>
        Pizza {pizza.name}-{" "}
        {pizza.price.toLocaleString("na-us", {
          style: "currency",
          currency: "BRL",
        })}{" "}
        x {pizza.quantity}
      </p>
      <button>Remover item</button>
    </ContainerLi>
  );
}

export default OrderItemCard;
