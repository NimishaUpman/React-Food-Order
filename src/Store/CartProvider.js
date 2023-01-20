import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART_ITEM') {
    // const updatedCartitems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedCartItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE_CART_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedCartItems;
    if (existingCartItem.amount === 1) {
      // console.log("1");
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // console.log("2");
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const AddItem = (item) => {
    dispachCartAction({ type: 'ADD_CART_ITEM', item: item });
  };
  const RemoveItem = (id) => {
    dispachCartAction({ type: 'REMOVE_CART_ITEM', id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItem,
    removeItem: RemoveItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
