// script.js
document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        const li = document.createElement("li");
        li.textContent = taskText;
        
        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("Please enter a task!");
    }
}
