// selectors
const boxes = document.querySelectorAll(".box");

//variables
const O_TEXT = "O";
const X_TEXT = "X";
const currentPlayer = O_TEXT;
const boxFilled = [null, null, null, null, null, null, null, null, null];

boxes.forEach((box, index) => {
  box.addEventListener("click", boxClicked);
});

function boxClicked(event) {
  const boxNo = event.target.
}
