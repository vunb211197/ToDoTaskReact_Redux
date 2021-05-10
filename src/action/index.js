
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

export const updateTask = (task) =>{
    return {
        type : "UPDATE_TASK",
        task : task
    }
};

export const clearTaskEditting = () =>{
    return {
        type : "CLEAR_TASK_EDITTING",
    }
};


export const onFilter = (name,status) =>{
    return {
        type : "ON_FILTER",
        name : name,
        status : status
    }
};

export const clearFilter = () =>{
    return {
        type : "CLEAR_FILTER",
    }
};

export const onSearch = (k) =>{
    return {
        type : "ON_SEARCH",
        keyWord : k
    }
};

export const clearKey = () =>{
    return {
        type : "CLEAR_KEY"
    }
};

export const onSort = (sortBy,sortValue) =>{
    return {
        type : "ON_SORT",
        sortBy : sortBy,
        sortValue : sortValue
    }
};

