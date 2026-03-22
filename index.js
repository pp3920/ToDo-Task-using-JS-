

let Tasks = [];
let taskNameInput = document.getElementById("TaskName");
let categoryInput = document.getElementById("Category");
let deadlineInput = document.getElementById("Deadline");
let taskStatusInput = document.getElementById("taskStatus");
let taskAdd = document.getElementById("Taskadd")
let taskList = document.getElementById("list");


taskAdd.addEventListener("click", function () {
    let TaskName = taskNameInput.value;
    let Category = categoryInput.value;
    let Deadline = deadlineInput.value;
    let taskStatus = taskStatusInput.value;


    if (TaskName === "" || Category === "" || Deadline === "" || taskStatus === "") {
        alert("Please fill all fields");
        return;
    }

    let tskObj = {
        name: TaskName,
        category: Category,
        deadline: Deadline,
        status: taskStatus
    };

    Tasks.push(tskObj);

    renderTasks();

    // clear inputs
    taskNameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    taskStatusInput.value = "";
});

function renderTasks() {
    taskList.innerHTML = "";

    let today = new Date();


    Tasks.forEach(function (task) {
        let li = document.createElement("li");

        let taskDeadline = new Date(task.deadline);
         if (today > taskDeadline && task.status !== "Completed") {
            task.status = "Overdue";
        }

        li.innerText =
            "Name: " + task.name +
            " | Category: " + task.category +
            " | Deadline: " + task.deadline +
            " | Status: " + task.status;

        taskList.appendChild(li);
    });
}
