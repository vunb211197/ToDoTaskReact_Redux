// get tasks in Local Storage
var tasks = JSON.parse(localStorage.getItem("tasks"));
// if task have some elements,intital State is task else return []
var initialState = tasks ? tasks : [];

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var randomId = () => {
  return s4() + "-" + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4();
};

var findIndex = (tasks, id) => {
  var rs = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      rs = index;
    }
  });
  return rs;
};

var TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      var id = action.task.id;
      if (id === "") {
        var new_task = {
          id: randomId(),
          name: action.task.name,
          status: action.task.status === "true" ? true : false,
        };
        state.push(new_task);
      } else {
        var index = findIndex(state, id);
        if (index !== -1) {
          state[index].name = action.task.name;
          state[index].status = action.task.status;
        }
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case "UPDATE_STATUS":
      console.log(action);
      var index = findIndex(state, action.id);
      //   state[index] = {
      //     ...state[index],
      //     status: !state[index].status,
      //   };
      state[index].status = !state[index].status;
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case "DELETE_TASK":
      console.log(action);
      var index = findIndex(state, action.id);

      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default TaskReducer;
