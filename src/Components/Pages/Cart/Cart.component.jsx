import React, {useContext} from 'react';
import ModalComponent from "../Modal/Modal.component";
import CartContext from "../../../Store/Cart/cart.context";
import CartItem from "../../Component/CartItem/CartItem.component";

const CartComponent = ({onClose}) => {

  const cartCtx = useContext(CartContext);

  const listFood = cartCtx.items.map(item => {
    return (<CartItem {...item} />);
  });

  const hasItems = cartCtx.items.length > 0 ? (
    <button className={'cart-actions-button'}>Order</button>)
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
      <div className={'cart-actions'}>
        <button className={'cart-actions-button--alt'} onClick={onClose}>Close</button>
        {hasItems}
      </div>
    </ModalComponent>
  );
};

export default CartComponent;