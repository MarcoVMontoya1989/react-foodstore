import React from 'react';
import ModalComponent from "../Modal/Modal.component";

const CartComponent = () => {

  const mock = [{id: 'c1', name: "Sushi", amount: 10, price: 23.88}
  ].map(item => {
    return (
      <li>{item.name}</li>
    );
  });

  return (
    <ModalComponent>
      <ul className={'cart-items'}>
        {mock}
      </ul>
      <div className={'cart-total'}>
        <span>total amount:</span>
        <span>23.88</span>
      </div>
      <div className={'cart-actions'}>
        <button className={'cart-actions-button--alt'}>Close</button>
        <button className={'cart-actions-button'}>Order</button>
      </div>
    </ModalComponent>
  );
};

export default CartComponent;