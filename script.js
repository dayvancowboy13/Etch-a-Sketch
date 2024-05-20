buildGrid();


function buildGrid(){
    //create a 16x16 grid of divs in the container
    const per_side = 10;
    const total_grid_squares = per_side*per_side;
    const SIZE_PERCENT = Math.floor(100/per_side) + "%";
    console.log(SIZE_PERCENT)

    const divContainer = document.querySelector(".container");



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
        // divNode.style.margin = "1px";
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