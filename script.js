const row = document.createElement("div");
row.classList.add("row");
const column = document.createElement("div");
column.classList.add("column");
const button = document.createElement("button");
button.innerHTML= "what size";
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
const header = document.createElement("h1");
header.innerHTML = "Odin Etch-A-Sketch";

document.body.appendChild(header);
buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer);
document.body.appendChild(gridContainer);

const createRows = (rowNum) => {
    for (let i = 0; i < rowNum; i++){
        gridContainer.appendChild(row.cloneNode(true));
    }
}

const createColumns = (columnNum) => {
    const rows = document.querySelectorAll(".row")
    rows.forEach((row)=>{
        for (let i = 0; i < columnNum; i++) {
            row.appendChild(column.cloneNode(true));
        }
    });
}

const deleteGrid = () => {
    gridContainer.innerHTML = ""
}


button.addEventListener("click", (e) => {
    userInput = prompt("How many square per side?")
    deleteGrid()
    createRows(userInput)
    createColumns(userInput)

    const columns = document.querySelectorAll(".column")
        columns.forEach((column)=> {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            const randomColor = `rgb(${r}, ${g}, ${b})`;

            column.addEventListener("mouseenter", (e) => {
                column.style["background-color"] = randomColor;
            })
        })
})

