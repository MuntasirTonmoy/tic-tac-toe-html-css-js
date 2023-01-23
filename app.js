const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  box.addEventListener("click", event => {
    console.log("box clicked");
  });
});
