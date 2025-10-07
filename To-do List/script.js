// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add event listener to button
addBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark task as completed on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("deleteBtn");
    delBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent parent click
        taskList.removeChild(li);
    });

    // Append button to list item
    li.appendChild(delBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
}
