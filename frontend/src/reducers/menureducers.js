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
    MENU_UPDATE_REQUEST,
    MENU_UPDATE_SUCCESS,
    MENU_UPDATE_FAIL,
    MENU_UPDATE_RESET,
    MENU_DELETE_REQUEST,
    MENU_DELETE_FAIL,
    MENU_DELETE_SUCCESS,
    MENU_DELETE_RESET,
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
  export const menuUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case MENU_UPDATE_REQUEST:
        return { loading: true };
      case MENU_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case MENU_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case MENU_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const menuDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case MENU_DELETE_REQUEST:
        return { loading: true };
      case MENU_DELETE_SUCCESS:
        return { loading: false, success: true };
      case MENU_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case MENU_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const menuCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case MENU_CREATE_REQUEST:
        return { loading: true };
      case MENU_CREATE_SUCCESS:
        return { loading: false, successCreate: true, createditem: action.payload };
      case MENU_CREATE_FAIL:
        return { loading: false, errorCreate: action.payload };
      case MENU_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };