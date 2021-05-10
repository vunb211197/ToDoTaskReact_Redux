import { combineReducers } from "redux";
import tasks from "./tasksReducer";
import isDisplayForm from "./isDisplayFormReducer";
import taskEditting from "./taskEditting";
import filterTable from "./filterTable";
import onSearch from "./searchReducer";
import onSort from "./sortReducer";

var myReducer = combineReducers({
    // state tasks có giá trị là task bên phía TaskReducer 
    //  tất cả các state của nó đây 
    //  vào trong thằng này lấy tất cả các state ra
    tasks: tasks,
    isDisplayForm : isDisplayForm,
    taskEditting : taskEditting,
    onFilter : filterTable,
    onSearch : onSearch,
    onSort : onSort
});

export default myReducer;
