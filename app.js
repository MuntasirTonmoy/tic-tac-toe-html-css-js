// selectors
const boxes = document.querySelectorAll(".box");

//variables
const O_TEXT = "O";
const X_TEXT = "X";

boxes.forEach((box, index) => {
  box.addEventListener("click", boxClicked);
});

function boxClicked(event) {}
