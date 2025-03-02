const completeTaskCount = document.getElementById("completeTaskCount");
const taskCount = document.getElementById("taskCount");
const completeBtns = document.getElementsByClassName("completeBtn");

const activityContainer = document.getElementById("activityContainer");

document.getElementById('current_date').innerText=getFormattedDate()

for (const btn of completeBtns) {
  btn.addEventListener("click", function (event) {
    const button = event.target;
    const activityText = button.getAttribute('data-activity')
    const alertText = button.getAttribute('data-alert')
    button.setAttribute("disabled", true);
    completeTaskCount.innerText = itemIntValue(completeTaskCount) + 1;
    taskCount.innerText = itemIntValue(taskCount) - 1;
    addActivity(activityText)
    alert(alertText)
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
    div.innerText = `${text} ${time}`;
    activityContainer.appendChild(div);
  }
  
function clearActivity(){
    activityContainer.innerHTML='';
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
  
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500", "bg-orange-500", "bg-gray-500"];

  document.getElementById('themeToggle').addEventListener('click', function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.classList.add(randomColor);
  });
  