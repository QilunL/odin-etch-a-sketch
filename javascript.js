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

function resetGrid(size){
  let squares = document.getElementById('container');
  while (squares.firstChild){
    squares.removeChild(squares.lastChild)
  }
  fillGrid(size);
}
let defaultColor = "black";
let color = defaultColor;

function changeColor(){
  this.style.backgroundColor = color;
}
fillGrid(16);