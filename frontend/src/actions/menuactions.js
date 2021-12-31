import Axios from 'axios';
import {
  MENU_FAIL,
  MENU_REQUEST,
  MENU_SUCCESS,
} from '../constants/menuconstants';

export const menulist = () => async (dispatch) => {
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