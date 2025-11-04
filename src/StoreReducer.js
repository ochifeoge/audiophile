export function storeReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = { ...action.payload, qty: Number(action.payload.qty || 1) };

      const itemExists = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemExists) {
        // If item already exists, increase quantity
        return {
          ...state,
          cart: state.cart.map((it) =>
            it.id === item.id ? { ...it, qty: it.qty + 1 } : it
          ),
        };
      } else {
        // If item does not exist, add it with qty: 1
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (c) =>
            c.id !== action.payload.id ||
            (c.selectedSize && c.selectedSize !== action.payload.selectedSize)
        ),
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "INCREASE_BY_ONE": {
      const { id } = action.payload;
      return {
        ...state,
        cart: state.cart.map((it) =>
          it.id === id ? { ...it, qty: Number(it.qty || 0) + 1 } : it
        ),
      };
    }
    case "DECREASE_BY_ONE": {
      const { id } = action.payload;
      return {
        ...state,
        cart: state.cart
          .map((it) =>
            it.id === id
              ? { ...it, qty: Math.max(0, Number(it.qty || 0) - 1) }
              : it
          )
          .filter((it) => it.qty > 0),
      };
    }
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
}
