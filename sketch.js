const body = document.querySelector("body");

function createGrid(numOfDivs){
    const divGridContainer = document.createElement("div");
    divGridContainer.classList.add("divGridContainer");
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

const slider = document.querySelector(".slider");
const sliderValue = document.getElementById("sliderValue");
createGrid(16);
color();

slider.addEventListener("click", () => {
    const divGridContainer = document.querySelector(".divGridContainer");
    divGridContainer.remove();
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    createGrid(Number(slider.value));
    color();
});



function color(){
    const divs = document.querySelectorAll(".gridDiv");
    divs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = "black";
    } );
});
}

