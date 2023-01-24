// selectors
const boxes = document.querySelectorAll(".box");
const playersTurn = document.querySelector(".players-turn");
const result = document.querySelector(".result");

//variables
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;
const boxFilled = [null, null, null, null, null, null, null, null, null];
playersTurn.innerText = `${currentPlayer}'s Turn`;
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

    const middleRowHorizontal =
      boxFilled[1] === currentPlayer &&
      boxFilled[4] === currentPlayer &&
      boxFilled[7] === currentPlayer;

    const lastRow =
      boxFilled[6] === currentPlayer &&
      boxFilled[7] === currentPlayer &&
      boxFilled[8] === currentPlayer;

    const middleRowVertical =
      boxFilled[3] === currentPlayer &&
      boxFilled[4] === currentPlayer &&
      boxFilled[5] === currentPlayer;

    const leftRow =
      boxFilled[0] === currentPlayer &&
      boxFilled[3] === currentPlayer &&
      boxFilled[6] === currentPlayer;

    const rightRow =
      boxFilled[2] === currentPlayer &&
      boxFilled[5] === currentPlayer &&
      boxFilled[8] === currentPlayer;

    const diagonal1 =
      boxFilled[0] === currentPlayer &&
      boxFilled[4] === currentPlayer &&
      boxFilled[8] === currentPlayer;

    const diagonal2 =
      boxFilled[2] === currentPlayer &&
      boxFilled[4] === currentPlayer &&
      boxFilled[6] === currentPlayer;

    //* checking if the condition is ture
    if (
      firstRow ||
      middleRowHorizontal ||
      lastRow ||
      leftRow ||
      middleRowVertical ||
      rightRow ||
      diagonal1 ||
      diagonal2
    ) {
      result.innerText = `${currentPlayer} win`;
    }

    const notDraw = boxFilled.some(elm => elm === null);
    if (!notDraw) {
      result.innerText = `Match Draw`;
    }

    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    playersTurn.innerText = `${currentPlayer}'s Turn`;
  }
}
