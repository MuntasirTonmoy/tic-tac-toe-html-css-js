const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  box.addEventListener("click", boxClicked);
});

function boxClicked(event) {}
