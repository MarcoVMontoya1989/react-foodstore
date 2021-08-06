
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      const updateItem = state.items.concat(action.payload);
      const updateTotalAmount = state.totalAmount +
        action.payload.price * action.payload.amount;

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
      return state;
  }
};

export default cartReducer