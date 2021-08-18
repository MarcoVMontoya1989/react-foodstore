import React, {useContext, useEffect, useState} from 'react';
import CartIconComponent from "../CartIcon/CartIcon.component";
import CartContext from "../../../Store/Cart/cart.context";

const CartButtonComponent = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const totalCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const {items} = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
     return;
    }

    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <>
      <button className={`button-cart ${btnHighlighted ? 'bump' : ''}`}
              onClick={props.showCart}
      >
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