import React, {useReducer} from 'react';
import CartContext from "./cart.context";

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      const updateItem = state.items.concat(action.payload);
      const updateTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

      return {
        ...state,
        items: updateItem,
        totalAmount: updateTotalAmount
      };
    case 'REMOVE_ITEM_TO_CART':
      return {
        ...state
      };
    default :
      return INITIAL_STATE;
  }
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, INITIAL_STATE);

  const addCartItemHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM_TO_CART', payload: item})
  };

  const removeCartItemHandler = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM_TO_CART', payload: id})
  };

  const cartValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addCartItemHandler,
    removeItems: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;