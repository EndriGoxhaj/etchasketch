const canvas = document.querySelector(".canvas");
const reset = document.querySelector(".reset");
const eraser = document.querySelector(".eraser");
let color = document.getElementById("color");
let colorValue = "#1B1212";
color.addEventListener("change", ()=>{
  colorValue = color.value;
})

let sizerange = document.getElementById("sizerange");
let gridSize = sizerange.value;
sizerange.addEventListener("change", ()=>{
  gridSize = sizerange.value;
  canvas.innerHTML = "";
  grid();
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
eraser.addEventListener('click', ()=>{
    colorValue = "white";
    
  });