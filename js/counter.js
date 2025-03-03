// counter.js
let counterElement = document.getElementById("counter");
let counter = parseInt(counterElement.innerText);

// Select all complete buttons
const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach(button => {
  button.addEventListener("click", function () {
    if (counter > 0 && !button.disabled) {
      counter--;
      counterElement.innerText = counter;
      button.disabled = true; // Disable button after click
      button.classList.add("bg-green-500"); // Change button color
      button.innerText = "Completed ✅";
      const taskName = button.closest(".bg-white").querySelector("h2").innerText; // Correctly select the task name
      addActivityLog(taskName); // Show log message instantly
      checkSuccess();
    }
  });
});

function checkSuccess() {
  if (counter === 0) {
    alert("🎯 Congratulations! You have completed all tasks successfully!");
  }
}