const gridBox = document.querySelector(".grid-box");
const rowsInput = document.querySelector(".input-rows");
const colsInput = document.querySelector(".input-cols");
const createBtn = document.querySelector(".btn-create");
const resetBtn = document.querySelector(".btn-reset");

const btnsClicked = () => {
  createBtn.addEventListener("click", (e) => {
    createGrid(parseInt(rowsInput.value), parseInt(colsInput.value));
  });
  resetBtn.addEventListener("click", (e) => {
    resetGrid();
  });
};

const createGrid = (rows, cols) => {
  //acess gridBox's style props, set css var prop to param values
  gridBox.style.setProperty("--rows-entered", rows);
  gridBox.style.setProperty("--cols-entered", cols);

  for (let cnt = 0; cnt < rows * cols; cnt++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridBox.appendChild(gridCell);

    gridCell.addEventListener("mouseover", function () {
      gridCell.classList.add("bg-color-change");
    });
  }
};

btnsClicked();

const resetGrid = () => {
  rowsInput.value = "";
  colsInput.value = "";
  gridBox.innerHTML = "";
};
