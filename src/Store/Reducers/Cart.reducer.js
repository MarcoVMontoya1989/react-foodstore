
const cartReducer = (state, action) => {

  const {payload} = action;
  let updateTotalAmount = null;
  let existingCartItemIndex = null;
  let existingCartItem = [];
  let updatedItems;

  switch (action.type) {

    case 'ADD_ITEM_TO_CART':
      updateTotalAmount = state.totalAmount +
        payload.price * payload.amount;

      existingCartItemIndex = state.items.findIndex(itemCart =>
        itemCart.id === payload.id
      );

      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem, amount: existingCartItem.amount + payload.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updateItem;
      } else {
        updatedItems = state.items.concat(payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updateTotalAmount
      };
    case 'REMOVE_ITEM_TO_CART':
      existingCartItemIndex = state.items.findIndex(itemCart =>
        itemCart.id === payload.id
      );

      existingCartItem = state.items[existingCartItemIndex];

      updateTotalAmount = state.totalAmount - payload.price * payload.amount;

      if(existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== payload.id);
      } else {
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updateTotalAmount
      };
    default :
      return state;
  }
};

export default cartReducer

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM_TO_CART':
//       const updateItem = state.items.concat(action.payload);
//       const updateTotalAmount = state.totalAmount +
//         action.payload.price * action.payload.amount;
//
//       return {
//         ...state,
//         items: updateItem,
//         totalAmount: updateTotalAmount
//       };
//     case 'REMOVE_ITEM_TO_CART':
//       return {
//         ...state
//       };
//     default :
//       return state;
//   }
// };
//
// export default cartReducer