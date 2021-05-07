import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import isDisplayForm from "./isDisplayFormReducer";
var myReducer = combineReducers({
    // state tasks có giá trị là task bên phía TaskReducer 
    //  tất cả các state của nó đây 
    //  vào trong thằng này lấy tất cả các state ra
    tasks: tasks,
    isDisplayForm : isDisplayForm
});

export default myReducer;
