//* selectors
const selection = document.querySelector(".selection");
const game = document.querySelector(".game");
const resultSection = document.querySelector(".result-section");

const playerXbtn = document.querySelector(".player-x");
const playerObtn = document.querySelector(".player-o");
const restartBtn = document.querySelector(".restart");

const boxes = document.querySelectorAll(".box");
const playersTurn = document.querySelector(".players-turn");
const result = document.querySelector(".result");
const trophy = document.querySelector(".trophy");

//* variables
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;
const boxFilled = [null, null, null, null, null, null, null, null, null];

//* Events
playerXbtn.addEventListener("click", selectedPlayer);
playerObtn.addEventListener("click", selectedPlayer);
restartBtn.addEventListener("click", restartGame);

// adding events on every box
boxes.forEach(function (box) {
  box.addEventListener("click", boxClicked);
});

//* functions
function selectedPlayer(event) {
  selection.classList.add("hide");
  game.classList.remove("hide");

  // set current player based on user selection
  currentPlayer = event.target.dataset.player === "x" ? X_TEXT : O_TEXT;
  playersTurn.innerText = `${currentPlayer}'s Turn`;
}

function boxClicked(event) {
  // getting box index from dataset
  const boxIndex = event.target.dataset.boxIndex;

  // checking if the index element is null
  if (boxFilled[boxIndex] === null) {
    // setting the current player X or O on array
    boxFilled[boxIndex] = currentPlayer;
    // showing in the html
    event.target.innerText = currentPlayer;

    // winning condition variable
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

    //* checking if the winning condition is ture
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
      gameResult("win");
      return;
    }

    // match draw condition
    const notDraw = boxFilled.some(elm => elm === null);
    if (!notDraw) {
      gameResult("draw");
      return;
    }

    // switching the current player
    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    playersTurn.innerText = `${currentPlayer}'s Turn`;
    const availabeBox = boxFilled.filter(elm => elm === null);
    bot(availabeBox, currentPlayer);
  }
}

function bot(availabeBox, currentPlayer) {
  game.style.pointerEvents = "none";
  const botMove = Math.floor(Math.random() * availabeBox.length);
  availabeBox[botMove] = currentPlayer;
  boxes[botMove].innerText = currentPlayer;
}

function gameResult(r) {
  playersTurn.innerText = "Game over";
  // can't touch for half second
  game.style.pointerEvents = "none";
  setTimeout(() => {
    game.classList.add("hide");
    resultSection.classList.remove("hide");
    if (r === "win") {
      trophy.innerText = `🏆`;
      result.innerHTML = `Player <span class="winner">${currentPlayer}</span> win`;
    } else {
      trophy.innerText = `💪`;
      result.innerText = `Match Draw`;
    }
  }, 500);
}

function restartGame() {
  resultSection.classList.add("hide");
  selection.classList.remove("hide");
  game.style.pointerEvents = "auto";

  boxFilled.forEach((box, index) => {
    boxFilled[index] = null;
  });

  boxes.forEach(function (box) {
    box.innerText = "";
  });
}
