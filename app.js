// selectors
const boxes = document.querySelectorAll(".box");

//variables
const O_TEXT = "O";
const X_TEXT = "X";
const currentPlayer = O_TEXT;
const boxFilled = [null, null, null, null, null, null, null, null, null];

boxes.forEach(function (box, index) {
  box.addEventListener("click", boxClicked);
  console.log();
});

function boxClicked(event) {
  const boxNo = event.target.dataset.boxIndex;
  console.log(boxNo);
}
