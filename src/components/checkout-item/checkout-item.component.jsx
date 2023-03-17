import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImgContainer,
  Img,
  MultiSpan,
  Arrow,
  Quantity,
  RemoveBtn,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { id, name, imageUrl, quantity, price } = cartItem;
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <Img src={imageUrl} alt={name} />
      </ImgContainer>
      <MultiSpan>{name}</MultiSpan>
      <Quantity>
        <Arrow title="decrement" onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow title="increment" onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <MultiSpan>${price * quantity}</MultiSpan>

      <RemoveBtn title="remove" onClick={clearItemHandler}>
        &#10005;
      </RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
