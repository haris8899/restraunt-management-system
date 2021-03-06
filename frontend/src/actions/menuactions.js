import Axios from 'axios';
import {
  MENU_FAIL,
  MENU_REQUEST,
  MENU_SUCCESS,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_DETAILS_FAIL,
  MENU_CREATE_FAIL,
  MENU_CREATE_REQUEST,
  MENU_CREATE_SUCCESS,
  MENU_CREATE_RESET,
  MENU_UPDATE_REQUEST,
  MENU_UPDATE_SUCCESS,
  MENU_UPDATE_FAIL,
  MENU_UPDATE_RESET,
  MENU_DELETE_REQUEST,
  MENU_DELETE_FAIL,
  MENU_DELETE_SUCCESS,
} from '../constants/menuconstants';

export const listMenu = () => async (dispatch) => {
  dispatch({
    type: MENU_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/fooditems');
    dispatch({ type: MENU_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MENU_FAIL, payload: error.message });
  }
};
export const detailsItem = (id) => async (dispatch) => {
  dispatch({ type: MENU_DETAILS_REQUEST, payload: id });
  try {
    const { data } = await Axios.get(`/api/fooditems/${id}`);
    dispatch({ type: MENU_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MENU_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateMenu = (item) => async (dispatch, getState) => {
  dispatch({ type: MENU_UPDATE_REQUEST, payload: item });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/fooditems/${item._id}`, item, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: MENU_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MENU_UPDATE_FAIL, error: message });
  }
};
export const deleteMenu = (id) => async (dispatch, getState) => {
  dispatch({ type: MENU_DELETE_REQUEST, payload: id });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/fooditems/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: MENU_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MENU_DELETE_FAIL, payload: message });
  }
};
export const createMenu = () => async (dispatch, getState) => {
  dispatch({ type: MENU_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/fooditems',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: MENU_CREATE_SUCCESS,
      payload: data.fooditems,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MENU_CREATE_FAIL, payload: message });
  }
};