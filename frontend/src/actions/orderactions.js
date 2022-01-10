import Axios from 'axios';
import { ORDER_ADD_ITEM,ORDER_REMOVE_ITEM } from '../constants/orderconstants';

export const addToOrder = (id, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/fooditems/${id}`);
  dispatch({
    type: ORDER_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('orderItems', JSON.stringify(getState().order.orderItems));
};

export const removeFromOrder = (id) => (dispatch, getState) => {
    dispatch({ type: ORDER_REMOVE_ITEM, payload: id });
    localStorage.setItem('orderItems', JSON.stringify(getState().order.orderItems));
};