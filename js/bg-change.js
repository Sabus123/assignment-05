
  const colors = ["green", "red", "blue", "yellow", "purple", "orange"];
  let index = 0;

  document.getElementById("bg-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];
    index++;
    if (index >= colors.length) {
      index = 0;
    }
  });