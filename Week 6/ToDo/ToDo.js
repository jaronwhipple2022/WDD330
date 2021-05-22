
list = tasks = []

function updateTasks(){

    var taskList = "";
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');

    for (i = 0; i < tasks.length; i++) {
        taskList += "<tr><td>" + "<input type='checkbox'></input>" +
        "</td><td>" + [i + 1] +
        "</td><td>" + tasks[i] + "</td></tr>"
    };
    document.getElementById("tasks").innerHTML = taskList;
}
function addItem() {
    newItem = document.getElementById("itemName").value;
    tasks.push(newItem);
    //console.log(tasks);

    updateTasks()
}

function deleteItem() {
    itemToDelete = document.getElementById("itemNum").value;
    itemToDelete = parseInt(itemToDelete) - 1
    tasks.splice(itemToDelete, 1);
    console.log(itemToDelete)
    console.log(tasks)

    updateTasks()
}
