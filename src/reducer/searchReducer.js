var initialState = "";

var onSearch = (state = initialState, action) => {
  switch (action.type) {
    case "ON_SEARCH":
      return action.keyWord;
    default:
      return state;
  }
};

export default onSearch;
