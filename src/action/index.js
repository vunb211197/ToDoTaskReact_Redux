
export const showForm = () =>{
    return {
        type : "SHOW_FORM",
    }
};

export const hideForm = () =>{
    return {
        type : "HIDE_FORM",
    }
};

export const addTask = (task) =>{
    return {
        type : "ADD_TASK",
        task : task
    }
};

export const updateStatus = (id) =>{
    return {
        type : "UPDATE_STATUS",
        id : id
    }
};

export const deleteItem = (id) =>{
    return {
        type : "DELETE_TASK",
        id : id
    }
};