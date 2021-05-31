
list = tasks = []

function updateTasks(){

    var taskList = "";
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');

    for (i = 0; i < tasks.length; i++) {
        taskList += "<tr><td>" + "<input type='checkbox' name='checked' value='" + (i + 1) + "'></input>" +
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

function getChecks(checked) {
    const checkboxes = document.querySelectorAll(`input[name="${checked}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert("these tasks are checked:" + getChecks('checked'));
});

checkedTasks = []
function viewChecked() {
    for (i = 0; i < tasks.length + 1; i++) {
        if (i in getChecks('checked')) {
            checkedTasks.push(tasks[i])
            console.log(checkedTasks)
    }
}
console.log(checkedTasks)
}
