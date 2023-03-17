import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ShoppingIconImg,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { cartState, setCartState, cartCount } = useContext(CartContext);
  const cartHandler = () => {
    setCartState(!cartState);
  };
  // let c = 0;
  // cartItems.map((cartItem) => (c += cartItem.quantity));
  return (
    <CartIconContainer onClick={cartHandler}>
      <ShoppingIconImg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
