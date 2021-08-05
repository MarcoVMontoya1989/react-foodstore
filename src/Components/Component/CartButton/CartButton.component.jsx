import React, {useContext} from 'react';
import CartIconComponent from "../CartIcon/CartIcon.component";
import CartContext from "../../../Store/Cart/cart.context";

const CartButtonComponent = (props) => {

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <>
      <button className={'button'} onClick={props.showCart}>
        <span>
          <CartIconComponent/>
        </span>
        <span>Your Cart</span>
        <span className={'badge'}>{totalCartItems}</span>
      </button>
    </>
  );
};

export default CartButtonComponent;