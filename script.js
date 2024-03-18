const container = document.querySelector(".container");
const gridSize = prompt("Choose size ")

function grid(){
  for(let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add("row");
    for(let j = 0; j < gridSize; j++){
      const cells = document.createElement('div');
      cells.classList.add("cells");
      row.appendChild(cells);
      cells.textContent = "2";
    }
    container.appendChild(row);
  }
}
grid();