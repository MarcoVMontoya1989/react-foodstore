import React, {useReducer} from 'react';
import CartContext from "./cart.context";
import cartReducer from "../Reducers/Cart.reducer";

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, INITIAL_STATE);

  const addCartItemHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM_TO_CART', payload: item});
  };

  const removeCartItemHandler = (id) => {
    // console.log('triggering remove', id);
    dispatchCartAction({type: 'REMOVE_ITEM_TO_CART', payload: id});
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