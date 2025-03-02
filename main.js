const completeTaskCount = document.getElementById("completeTaskCount");
const taskCount = document.getElementById("taskCount");
const completeBtns = document.getElementsByClassName("completeBtn");

const activityContainer = document.getElementById("activityContainer");

document.getElementById("current_date").innerText = getFormattedDate();
let dataCount = 0;
for (const btn of completeBtns) {
  btn.addEventListener("click", function (event) {
    const button = event.target;
    const activityText = button.parentNode.parentNode.querySelector('h2').innerText;
    const alertText = button.getAttribute("data-alert");
    dataCount +=1;
    
    if (dataCount === 6 ) {
      if (confirm(alertText)) {
        alert("Congratulation!! You have completed all tasks");
      }
    } else {
      alert(alertText);
    }
    button.setAttribute("disabled", true);
    completeTaskCount.innerText = itemIntValue(completeTaskCount) + 1;
    taskCount.innerText = itemIntValue(taskCount) - 1;
    addActivity(activityText);
  });
}

function itemIntValue(item) {
  return parseInt(item.innerText);
}

function addActivity(text) {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const div = document.createElement("div");
  div.classList.add("p-3", "rounded-md", "bg-gray-100", "text-sm");
  div.innerText = `You have completed the task ${text} at ${time}`;
  activityContainer.appendChild(div);
}

function clearActivity() {
  activityContainer.innerHTML = "";
}

function getFormattedDate() {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

const colors = [
  "#EF4444",
  "#3B82F6",
  "#10B981",
  "#FACC15",
  "#8B5CF6",
  "#EC4899",
  "#6366F1",
  "#14B8A6",
  "#F97316",
  "#6B7280",
];

document.getElementById("themeToggle").addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

