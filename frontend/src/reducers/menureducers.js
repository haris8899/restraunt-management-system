const {
    MENU_REQUEST,
    MENU_SUCCESS,
    MENU_FAIL,
    MENU_DETAILS_REQUEST,
    MENU_DETAILS_SUCCESS,
    MENU_DETAILS_FAIL,
    MENU_CREATE_FAIL,
    MENU_CREATE_REQUEST,
    MENU_CREATE_SUCCESS,
    MENU_CREATE_RESET,
  } = require('../constants/menuconstants');
  
  export const menuListReducer = (
    state = { loading: true, fooditems: [] },
    action
  ) => {
    switch (action.type) {
      case MENU_REQUEST:
        return { loading: true };
      case MENU_SUCCESS:
        return { loading: false, fooditems: action.payload };
      case MENU_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const itemDetailsReducer = (
    state = { item: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case MENU_DETAILS_REQUEST:
        return { loading: true };
      case MENU_DETAILS_SUCCESS:
        return { loading: false, item: action.payload };
      case MENU_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const menuCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case MENU_CREATE_REQUEST:
        return { loading: true };
      case MENU_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case MENU_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case MENU_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };