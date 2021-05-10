var initialState = {
  sortBy: "name",
  sortValue: 1,
};

var onSort = (state = initialState, action) => {
  switch (action.type) {
    case "ON_SORT":
      console.log(action);
      return {
        sortBy: action.sortBy,
        sortValue: action.sortValue,
      };
    default:
      return state;
  }
};

export default onSort;
