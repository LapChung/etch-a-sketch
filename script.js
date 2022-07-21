let slideValue = document.querySelector("#slider");
let dimension = document.querySelector("#dimension");
let gridContainer = document.querySelector(".grid-container");
dimension.textContent = `${slideValue.value} x ${slideValue.value}`;

slideValue.addEventListener("input", (event) => {
  createGrid();
  dimension.textContent = `${slideValue.value} x ${slideValue.value}`;
});

// Global variable to track mouse
let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

let colorPicker = document.querySelector("#colorPicker");

const createGrid = () => {
  gridContainer.textContent = "";

  gridContainer.style.gridTemplateColumns = `repeat(${slideValue.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${slideValue.value}, 1fr)`;

  for (let i = 0; i < slideValue.value * slideValue.value; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridContainer.append(gridBox);

    gridBox.addEventListener("mousedown", colorChanger);
    gridBox.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        colorChanger(event);
      }
    });
  }
};

let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraseBtn = document.querySelector("#eraseBtn");
let clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", () => {
  createGrid();
});

let currentMode = "color";

const setNewMode = (newMode) => {
  activeButton(newMode);
  currentMode = newMode;
};

colorBtn.onclick = () => setNewMode("color");
rainbowBtn.onclick = () => setNewMode("rainbow");
eraseBtn.onclick = () => setNewMode("erase");

const activeButton = (newMode) => {
  switch (currentMode) {
    case "color":
      colorBtn.classList.remove("active");
      break;
    case "rainbow":
      rainbowBtn.classList.remove("active");
      break;
    case "erase":
      eraseBtn.classList.remove("active");
      break;
    default:
      text = "No button found";
  }

  switch (newMode) {
    case "color":
      colorBtn.classList.add("active");
      break;
    case "rainbow":
      rainbowBtn.classList.add("active");
      break;
    case "erase":
      eraseBtn.classList.add("active");
      break;
    default:
      text = "No button found";
  }
};

const colorChanger = (event) => {
  switch (currentMode) {
    case "color":
      event.target.style.backgroundColor = colorPicker.value;
      break;
    case "rainbow":
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
      break;
    case "erase":
      event.target.style.backgroundColor = "white";
    default:
      text = "No color found";
  }
};

window.onload = () => {
  createGrid();
  activeButton(currentMode);
};
