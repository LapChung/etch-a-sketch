let slideValue = document.querySelector("#slider");
let dimension = document.querySelector("#dimension");
dimension.textContent = `${slideValue.value} x ${slideValue.value}`;

slideValue.addEventListener("input", (event) => {
  createGrid();
  dimension.textContent = `${slideValue.value} x ${slideValue.value}`;
});

const createGrid = () => {
  let gridContainer = document.querySelector(".grid-container");
  let gridSize = Math.pow(slideValue.value, 2);
  gridContainer.textContent = "";

  gridContainer.style.gridTemplateColumns = `repeat(${slideValue.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${slideValue.value}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridContainer.append(gridBox);
  }
};

createGrid();
