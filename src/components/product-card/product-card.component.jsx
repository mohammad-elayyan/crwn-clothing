import React, { useContext } from "react";
import { button_type_classes } from "../button/button.component";
import {ProductCardCont,Img,Btn,Footer,Name,Price} from "./product-card.styles";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardCont>
      <Img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Btn
        buttonType={button_type_classes.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Btn>
    </ProductCardCont>
  );
};

export default ProductCard;
