const row = document.createElement("div");
row.classList.add("row");
const column = document.createElement("div");
column.classList.add("column");
const button = document.createElement("button");
button.innerHTML= "what size";
const gridContainer = document.createElement("div");
gridContainer.id = "gridContainer";

document.body.appendChild(button);
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
            column.addEventListener("mouseenter", (e) => {
                column.classList.add("filled");
            })
})
})

