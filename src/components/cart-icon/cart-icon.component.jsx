import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartState, setCartState, cartCount } = useContext(CartContext);
  const cartHandler = () => {
    setCartState(!cartState);
  };
  // let c = 0;
  // cartItems.map((cartItem) => (c += cartItem.quantity));
  return (
    <div className="cart-icon-container" onClick={cartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
