const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const sliderValue = document.getElementById("sliderValue");
const colorChooser = document.querySelector(".colorChooser");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
let isColor = true;

createGrid(16);
color(isColor);


colorBtn.addEventListener("click", () => {
    isColor = true;
    color(isColor);
});

rainbowBtn.addEventListener("click", () => {
    isColor = false;
    color(isColor);
});

clearBtn.addEventListener("click", () => {
    replaceGrid();
});

// Changes grid size
slider.addEventListener("click", () =>{
    replaceGrid();
});


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
    canvas.appendChild(divGridContainer);
}



function replaceGrid(){
    const divGridContainer = document.querySelector(".divGridContainer");
    divGridContainer.remove();
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    createGrid(Number(slider.value));
    color(isColor);
}


// Allows you to color
function color(isColor){
   
    
    if(isColor){
        const divs = document.querySelectorAll(".gridDiv");
        divs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseenter", e => {
            if (e.buttons == 1){
                gridDiv.style.backgroundColor = `${colorChooser.value}`;
            }
            
        } );
    });
    }
    else {
        const divs = document.querySelectorAll(".gridDiv");
        divs.forEach((gridDiv) => {
            gridDiv.addEventListener("mouseenter", e => {
                if (e.buttons == 1){
                    gridDiv.style.backgroundColor = `rgb(${Math.random() * 257}, ${Math.random() * 257},${Math.random() * 257})`;
                }
                
            } );
        });
    }

}




