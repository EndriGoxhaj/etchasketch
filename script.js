const canvas = document.querySelector(".canvas");
const gridSize = prompt("Choose size ")
const reset = document.querySelector(".reset");



let color = document.getElementById("color");
let colorValue;
colorValue = "black";
color.addEventListener("change", ()=>{
  colorValue = color.Value;
  cells.style.backgroundColor = colorValue;
  
})


function grid(){
  for(let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add("row");
    for(let j = 0; j < gridSize; j++){
      const cells = document.createElement('div');
      cells.classList.add("cells");
      row.appendChild(cells);
      cells.addEventListener('mouseover', ()=>{
        cells.style.cursor = "pointer";
        cells.style.backgroundColor = colorValue;
      })
    }
    canvas.appendChild(row);
  }
}
grid();

reset.addEventListener('click', ()=>{
  allcells  = document.querySelectorAll(".cells");
  allcells.forEach(cells => {
    cells.style.backgroundColor = "white";
    
  });
  
})