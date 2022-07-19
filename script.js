let slideValue = document.querySelector("#slider");
let dimension = document.querySelector("#dimension");
let gridContainer = document.querySelector(".grid-container");
dimension.textContent = `${slideValue.value} x ${slideValue.value}`;

slideValue.addEventListener("input", (event) => {
  createGrid();
  dimension.textContent = `${slideValue.value} x ${slideValue.value}`;
});

let isMouseDown = false;
const createGrid = () => {
  gridContainer.textContent = "";

  gridContainer.style.gridTemplateColumns = `repeat(${slideValue.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${slideValue.value}, 1fr)`;

  for (let i = 0; i < slideValue.value * slideValue.value; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridContainer.append(gridBox);

    gridBox.onmousedown = (event) => {
      isMouseDown = true;
      event.target.style.backgroundColor = "red";
    };
    gridBox.onmouseup = () => (isMouseDown = false);
    gridBox.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = "red";
      }
    });
  }
};

createGrid();
