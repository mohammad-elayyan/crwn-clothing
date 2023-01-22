import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartState, setCartState } = useContext(CartContext);
  const cartHandler = () => {
    cartState ? setCartState(false) : setCartState(true);
  };
  return (
    <div className="cart-icon-container" onClick={cartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
