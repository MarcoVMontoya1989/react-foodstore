import React from 'react';

//blueprint?
const CartContext = React.createContext(
  {
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItems: (item) => {},
  }
);

export default CartContext;