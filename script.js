var bRandomizeColor = false;
var defaultColor = "black";
var bOpacityMode = false;

buildGrid();
setUpResetButton();
setUpRandomizeButton();
setUpOpacityButton();


function buildGrid(perSide=16){
    //create a 16x16 grid of divs in the container
    const per_side = perSide;

    const total_grid_squares = per_side*per_side;    
    const divContainer = document.querySelector(".container");

    const SIZE_PERCENT = (divContainer.clientWidth/per_side)-2 + "px";

    for (let j = 0; j < total_grid_squares; j++){
        let divNode = document.createElement('div');

        divNode.className = "grid-box"
        divNode.style.border = 'solid white 1px';
        divNode.style.width = SIZE_PERCENT;
        divNode.style.height = SIZE_PERCENT;
        divNode.style.margin = "0";

        if(bOpacityMode){
            divNode.style.opacity = '0';

            divNode.addEventListener("mouseover", () => {
                divNode.style.backgroundColor = defaultColor;
                divNode.style.borderColor = defaultColor;
                let currentOpacity = +divNode.style.opacity;
                divNode.style.opacity = `${currentOpacity + .1}`
            });
        }
        
        divNode.addEventListener("mouseover", () => {
            if (bRandomizeColor){
                let randomColor = getRandomColor();
                divNode.style.backgroundColor = randomColor;
                divNode.style.borderColor = randomColor;
            } else {
                divNode.style.backgroundColor = defaultColor;
                divNode.style.borderColor = defaultColor;
            }
        });

        divContainer.appendChild(divNode);
        
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getRandomColor(){
    let red = randomIntFromInterval(0,255);
    let blue = randomIntFromInterval(0,255);
    let green = randomIntFromInterval(0,255);

    colorInHex = '#' + red.toString(16) + blue.toString(16) + green.toString(16);
    
    return colorInHex;
}

function setUpResetButton (){
    const resetButton = document.querySelector(".reset-button");
    
    resetButton.addEventListener('click', () => {
        let newGridNumber = +prompt("Enter a number (1-100): ");
        
        //default to 16 if there is non-valid input
        if (!Number.isInteger(newGridNumber) || newGridNumber > 100 
            || newGridNumber < 1) {
                newGridNumber = 16;
                alert('Invalid input!');
            }

        deleteOldGrid();
        buildGrid(newGridNumber);
    });
}

function setUpRandomizeButton () {
    const randButton = document.querySelector('.randomize-button');

    randButton.addEventListener('click', () =>{
        if(bRandomizeColor) bRandomizeColor = false;
        else bRandomizeColor = true;
    });
}

function setUpOpacityButton () {
    const opacityButton = document.querySelector('.opacity-button');

    opacityButton.addEventListener('click', () =>{
        if(bOpacityMode) bOpacityMode = false;
        else bOpacityMode = true;

        deleteOldGrid();
        buildGrid();
    });

    
}

function deleteOldGrid (){
    const divContainer = document.querySelector(".container");
    // alert("DELTING GRID. " + divContainer.hasChildNodes())
    
    while(divContainer.hasChildNodes()){
        divContainer.lastChild.remove();
    }
}