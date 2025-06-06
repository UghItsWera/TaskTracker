const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");

// Create reminder function (Template Card)
function createReminder(id, message, date, time) {
    // Error handling
    if (message && message.length > 45) {
        alert("We only support 45 characters");
        return;
    } else if (!message) {
        alert("Please enter a Reminder");
        return;
    }

    const li = document.createElement("li");
    li.id = id;
    li.className = "reminder";
    
    const div = document.createElement("div");
    div.className = "text";
    div.innerText = message;
    
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = date;
    
    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.value = time;

    // Actions container
    const actionContainer = document.createElement("div");
    actionContainer.className = "actions";

    // Have the check and delete buttons
    const checkBtn = document.createElement("button");
    checkBtn.className = "btn-check";
    checkBtn.innerText = "Checked";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.innerText = "Delete";

    // Events handler functions
    checkBtn.addEventListener("click", function () {
        if (li.id == id) {
            div.style.textDecoration = "line-through";
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (li.id == id) {
            list.removeChild(li);
        }
    });

    // Append the button for actions
    actionContainer.appendChild(checkBtn);
    actionContainer.appendChild(deleteBtn);

    // Append all the elements in Li
    li.appendChild(div);
    li.appendChild(dateInput);
    li.appendChild(timeInput);
    li.appendChild(actionContainer);

    return li;
}

newReminder.addEventListener("click", function () {
    let message = prompt("Please enter a Reminder");
    let date = prompt("Please enter the date (YYYY-MM-DD)");
    let time = prompt("Please enter the time (HH:MM)");

    let id = Math.floor(Math.random() * 100);
    let reminder = createReminder(id, message, date, time);
    list.appendChild(reminder);
});
