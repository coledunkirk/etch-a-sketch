const container = document.querySelector(".container");
const button = document.querySelector(".round-button");
function randomColor() {
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);
  let rgb3 = Math.floor(Math.random() * 255);
  return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}
grid(16, 16);
function grid(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);
  for(i = 0; i < (rows * columns); i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
  });
}
function newGrid(e) {
  let choice = prompt("How many squares per side?");
  if (choice === null) {
    return;
  }
  else if (choice > 100 || choice < 1) {
    alert ("Enter a number between 1 and 100!");
    newGrid();
  }

  else if (isNaN(choice)) {
    alert ("That's not a number!!");
    newGrid();
  }

  else {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    grid(choice, choice);
  }
}
function changeColor(e) {
  e.target.style.backgroundColor = randomColor();
}
button.addEventListener("click", newGrid);
