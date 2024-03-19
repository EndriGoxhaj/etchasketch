const container = document.querySelector(".container");
const gridSize = prompt("Choose size ")
const reset = document.querySelector(".reset");

let color = "#000";


function grid(){
  for(let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add("row");
    for(let j = 0; j < gridSize; j++){
      const cells = document.createElement('div');
      cells.classList.add("cells");
      row.appendChild(cells);
      cells.addEventListener('mouseover', ()=>{
        document.body.style.cursor = "pointer";
        cells.style.backgroundColor = color;
      })
    }
    container.appendChild(row);
  }
}
grid();
reset.addEventListener('click', ()=>{
  allcells  = document.querySelectorAll(".cells");
  allcells.forEach(cells => {
    cells.style.backgroundColor = "white";
    
  });
})