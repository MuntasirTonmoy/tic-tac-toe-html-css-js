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
  const boxIndex = event.target.dataset.boxIndex;
  console.log(boxIndex);

  if (boxFilled[boxIndex] === null) {
    boxFilled[boxIndex] = currentPlayer;
    event.target.innerText = currentPlayer;
  }
}
