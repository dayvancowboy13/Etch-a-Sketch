buildGrid();
setUpButton();



function buildGrid(perSide=16){
    //create a 16x16 grid of divs in the container
    const per_side = perSide;
    // const minGridSize = 10;
    const total_grid_squares = per_side*per_side;
    // console.log(SIZE_PERCENT)
    
    const divContainer = document.querySelector(".container");
    // divContainer.style.width = (minGridSize * per_side + per_side*2) + "px";

    const SIZE_PERCENT = (divContainer.clientWidth/per_side)-2 + "px";
    console.log(divContainer.clientWidth/(per_side+2))



    for (let j = 0; j < total_grid_squares; j++){
        let divNode = document.createElement('div');

        //divNode.style.display = 'flexbox';
        divNode.className = "grid-box"
        
        divNode.addEventListener("mouseover", () => {
            divNode.style.backgroundColor = "blue";
        });

        // divNode.style.display = "flex"
        // divNode.style.flex = "1";
        divNode.style.border = 'solid black 1px';
        divNode.style.width = SIZE_PERCENT;
        divNode.style.height = SIZE_PERCENT;
        divNode.style.margin = "0";
        divContainer.appendChild(divNode);
        
    }

    // for (let i = 0; i < NUM_ROWS; i++){
    //     let divRow = document.createElement('div');
    //     divRow.className = "grid-row";
    //     divRow.style.display = "flex";

    //     for (let j = 0; j < NUM_ROWS; j++){
    //     let divNode = document.createElement('div');

    //     //divNode.style.display = 'flexbox';
    //     divNode.className = "grid-box"
    //     divNode.style.display = "flex"
    //     divNode.style.border = 'solid black 1px';
    //     divNode.style.minWidth = STD_SIZE;
    //     divNode.style.minHeight = STD_SIZE;
    //     divRow.appendChild(divNode);
    //     }

    // divContainer.appendChild(divRow);
    // }
    //use flexbox to make the grid
    //have borders
}

function setUpButton (){
    const buttonRef = document.querySelector(".reset-button");
    buttonRef.addEventListener('click', () => {
        let newGridNumber = prompt("Enter a number: ");
        deleteOldGrid();
        buildGrid(newGridNumber);
    });
}

function deleteOldGrid (){
    const divContainer = document.querySelector(".container");
    // alert("DELTING GRID. " + divContainer.hasChildNodes())
    
    while(divContainer.hasChildNodes()){
        divContainer.lastChild.remove();
    }
}