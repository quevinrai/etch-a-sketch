const btnNewGrid = document.querySelector("#btn-newgrid");
const btnColorBlack = document.querySelector("#btn-color-black");
const btnColorRainbow = document.querySelector("#btn-color-rainbow");
const container = document.querySelector(".container");
const grid = document.querySelector(".grid16x16");

let color = "black";

function generateGrid(row = 16, col = 16) {
    
    let totalCells = row * col;

    grid.innerHTML = "";
    grid.style.cssText = `grid-template-columns: repeat(${col}, 1fr); grid-template-rows: repeat(${row}, 1fr);`

    for (i = 0; i < totalCells; i++) {
        const gridcell = document.createElement("div");
        gridcell.classList.add("cellborder");
        grid.appendChild(gridcell);
    }
}

function setGridColor() {
    const gridCells = document.querySelectorAll(".grid16x16 > *");
    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            if(color === "black") e.target.style.backgroundColor = "rgb(0, 0, 0)";
            else {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    });
}

window.addEventListener("load", (e) => {
    generateGrid();
    setGridColor();
});

btnNewGrid.addEventListener("click", (e) => {
    let row = prompt("Enter number of rows:");
    let col = prompt("Enter number of columns:");

    generateGrid(Number(row), Number(col));
    setGridColor();
});

btnColorBlack.addEventListener("click", () => color = "black");
btnColorRainbow.addEventListener("click", () => color = "rainbow");
