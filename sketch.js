const body = document.querySelector("body");

const divGridContainer = document.createElement("div");
divGridContainer.classList.add("divGridContainer");

function createGrid(numOfDivs){
    for(let x = 0; x < numOfDivs; x++){
        const row = document.createElement("div");
        row.classList.add("row")
        for (let y = 0; y < numOfDivs; y++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv")
            row.appendChild(gridDiv);
        }
        divGridContainer.appendChild(row);
    }
    body.appendChild(divGridContainer);
}

createGrid(16);