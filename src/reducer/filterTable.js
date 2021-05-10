var initialState = {
  name: "",
  status: -1,
};

var onFilter = (state = initialState, action) => {
  switch (action.type) {
    case "ON_FILTER":
      console.log("Action filter table", action);
      return {
        name: action.name,
        status: action.status,
      };
    case "CLEAR_FILTER":
      console.log("clearfilter");
      return {
        name: "",
        status: -1,
      };
    default:
      return state;
  }
};

export default onFilter;
