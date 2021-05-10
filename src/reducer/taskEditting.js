var initialState = null;

var taskEditting = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TASK":
      return action.task;
    case "CLEAR_TASK_EDITTING":
      console.log("123");
      return null;
    default:
      return state;
  }
};

export default taskEditting ;
