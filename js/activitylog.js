// activitylog.js
const activityLogSection = document.getElementById("update-btn");
const clearButton = document.getElementById("clear-btn");

function addActivityLog(taskName) {
  const currentTime = new Date().toLocaleTimeString();
  const logMessage = `You have completed the task: ${taskName} at ${currentTime}`;
  const logDiv = document.createElement("div");
  logDiv.className = "bg-gray-100 rounded-lg p-3 mb-3";
  logDiv.innerText = logMessage;
  activityLogSection.insertAdjacentElement("afterbegin", logDiv); // Add log message at the top
}

clearButton.addEventListener("click", function () {
  activityLogSection.innerHTML = "";
});
