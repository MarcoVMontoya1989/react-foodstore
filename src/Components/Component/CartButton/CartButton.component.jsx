import React from 'react';
import CartIconComponent from "../CartIcon/CartIcon.component";

const CartButtonComponent = (props) => {
  return (
    <>
      <button className={'button'}>
        <span>
          <CartIconComponent/>
        </span>
        <span>Your Cart</span>
        <span>3</span>
      </button>;
    </>
  );
};

export default CartButtonComponent;