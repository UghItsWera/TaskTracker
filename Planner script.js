// Calendar code
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

// Save the actual current date for marking today
const today = new Date();

let currYear = today.getFullYear();
let currMonth = today.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  // First day of the current month (0=Sunday, 6=Saturday)
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  // Last date (number) of the current month
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  // Last date (number) of the previous month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  
  let liTag = "";

  // Create inactive days for the previous month
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  // Create days for the current month
  for (let i = 1; i <= lastDateOfMonth; i++) {
    // Mark the day as active if it matches today and if you're viewing the current month/year
    let isToday =
      i === today.getDate() && currMonth === today.getMonth() && currYear === today.getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  // Determine the day of week for the last date of the current month
  let lastDayOfWeek = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  // Fill in the remaining days for the next month so the week displays complete
  for (let i = lastDayOfWeek; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfWeek + 1}</li>`;
  }

  // Update the calendar header
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

// Event listeners for the previous/next icons
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Subtract or add one month depending on the icon id ("prev" or "next")
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    // Create a new Date object to handle month and year rollover automatically
    const newDate = new Date(currYear, currMonth, 1);
    currYear = newDate.getFullYear();
    currMonth = newDate.getMonth();

    renderCalendar();
  });
});


// Notepad code
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const noteList = document.getElementById("note-list");

function addNote() {
  const note = noteInput.value;
  if (note.trim() !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");

    p.textContent = note;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(p);
    li.appendChild(deleteBtn);
    noteList.appendChild(li);

    noteInput.value = "";
  }
}

addNoteBtn.addEventListener("click", addNote);