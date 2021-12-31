const {
    MENU_REQUEST,
    MENU_SUCCESS,
    MENU_FAIL,
  } = require('../constants/menuconstants');
  
  export const menuListReducer = (
    state = { loading: true, fooditems: [] },
    action
  ) => {
    switch (action.type) {
      case MENU_REQUEST:
        return { loading: true };
      case MENU_SUCCESS:
        return { loading: false, products: action.payload };
      case MENU_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }