import { ORDER_ADD_ITEM , ORDER_REMOVE_ITEM} from '../constants/orderconstants';

export const orderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case ORDER_ADD_ITEM:
      const item = action.payload;
      const existItem = state.orderItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          orderItems: state.orderItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, orderItems: [...state.orderItems, item] };
      }
    case ORDER_REMOVE_ITEM:
      return {
        ...state,
        orderItems: state.orderItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};