const text = document.getElementById("text");
function play(guess) {
  let number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
  if (guess === number) {
    text.textContent = "You Won! Choose a Number to Play Again";
  } else {
    text.textContent = "You Lost! Choose a Number to Play Again";
  }
}
