var initialState = false;

var isDisplayFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return true;
    case "HIDE_FORM":
      return false;
    default:
      return state;
  }
};

export default isDisplayFormReducer;
