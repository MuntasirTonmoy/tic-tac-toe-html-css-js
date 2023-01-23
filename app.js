// selectors
const boxes = document.querySelectorAll(".box");

//variables
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;
const boxFilled = [null, null, null, null, null, null, null, null, null];

boxes.forEach(function (box, index) {
  box.addEventListener("click", boxClicked);
});

function boxClicked(event) {
  const boxIndex = event.target.dataset.boxIndex;

  if (boxFilled[boxIndex] === null) {
    boxFilled[boxIndex] = currentPlayer;
    event.target.innerText = currentPlayer;

    const firstRow =
      boxFilled[0] === currentPlayer &&
      boxFilled[1] === currentPlayer &&
      boxFilled[2] === currentPlayer;

    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
}
