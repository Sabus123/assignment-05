

  // document.getElementById("bg-btn")
  // .addEventListener("click", function (event) 
  // {
  //   document.body.style.backgroundColor = "green";
  // });


  const colors = ["green", "red", "blue", "yellow", "purple", "orange"];
  let index = 0;

  document.getElementById("bg-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];

    index++;

    // Reset to the first color if index reaches the end
    if (index >= colors.length) {
      index = 0;
    }
  });