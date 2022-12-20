function fillGrid(n){
  let container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (let i = 0; i < (n * n); i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    newDiv.addEventListener("mouseover", changeColor);
    container.appendChild(newDiv);
  }
}

function resetGrid(){
  let squares = document.getElementById('container');
  let userInput;
  while (squares.firstChild){
    squares.removeChild(squares.lastChild)
  }
  do {
    userInput = prompt("Please enter desired board size(Max. 100 x 100)", "16");
    userInput = parseInt(userInput);
  }
  while(userInput > 100);
  fillGrid(userInput);
}
let defaultColor = "black";
let color = defaultColor;

function changeColor(){
  this.style.backgroundColor = color;
}
fillGrid(16);