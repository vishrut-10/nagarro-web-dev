var statusEnums = {
    active : "active",
    complete : "complete",
    delete : "delete"
};

var todoList = {
   1 : {title : "Learn JavaScript", status: statusEnums.active},
   2 : {title : "Do Assignment on API", status: statusEnums.active}
};

var nextTodoID = 3;

module.exports = {
    statusEnums : statusEnums,
    todoList : todoList,
    nextTodoId : nextTodoID
};