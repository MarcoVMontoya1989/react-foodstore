import React, {useContext, useState} from 'react';
import ModalComponent from "../Modal/Modal.component";
import CartContext from "../../../Store/Cart/cart.context";
import CartItem from "../../Component/CartItem/CartItem.component";
import CheckoutComponent from "../Checkout/Checkout.component";

const CartComponent = ({onClose}) => {

  const [IsCheckingOut, setIsCheckingOut] = useState(false)
  const cartCtx = useContext(CartContext);

  const listFood = cartCtx.items.map(item => {
    return (<CartItem
      {...item}
      onRemoveItem={cartCtx.removeItems}
      onAddItem={cartCtx.addItems}
    />);
  });

  const orderHandler = () => {
    setIsCheckingOut(true);
  }

  const hasItems = cartCtx.items.length > 0 ? (
    <button className={'cart-actions-button'} onClick={orderHandler}>Order</button>)
    : null;

  return (
    <ModalComponent toClose={onClose}>
      <ul className={'cart-items'}>
        {listFood}
      </ul>

      <div className={'cart-total'}>
        <span>total amount:</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>

      {IsCheckingOut ? <CheckoutComponent toClose={onClose}/> : null}

      <div className={'cart-actions'}>
        <button className={'cart-actions-button--alt'} onClick={onClose}>Close</button>

        {hasItems}
      </div>
    </ModalComponent>
  );
};

export default CartComponent;