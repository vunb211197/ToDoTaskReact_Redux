var initialState = false;

var isDisplayFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_FORM":
    // run action showform
    console.log("Start Showform");
      return true;
    case "HIDE_FORM":
      return false;
    default:
      return state;
  }
};

export default isDisplayFormReducer;
