// selectors
const selection = document.querySelector(".selection");
const game = document.querySelector(".game");
const resultSection = document.querySelector(".result-section");

const playerXbtn = document.querySelector(".player-x");
const playerObtn = document.querySelector(".player-o");

const boxes = document.querySelectorAll(".box");
const playersTurn = document.querySelector(".players-turn");
const result = document.querySelector(".result");

//variables
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;
const boxFilled = [null, null, null, null, null, null, null, null, null];

// Events

playerXbtn.addEventListener("click", selectedPlayer);
playerObtn.addEventListener("click", selectedPlayer);

boxes.forEach(function (box) {
  box.addEventListener("click", boxClicked);
});

function selectedPlayer(event) {
  selection.classList.add("hide");
  game.classList.remove("hide");
  currentPlayer = event.target.dataset.player === "x" ? X_TEXT : O_TEXT;
  playersTurn.innerText = `${currentPlayer}'s Turn`;
}

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
