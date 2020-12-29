// Create a grid //
let gridNumber;
function makeGrid(gridNumber) {
    // Create a loop that creates a row 16 times //
    for (let i = 0; i < gridNumber; i++) {
        let row = document.createElement('div');
        row.className = "row";
        // Set row to a maximum of 960 pixels wide //
        row.style.width = '960px';
        // Create a loop that creates a box 16 times //
        for(let j = 0; j < gridNumber; j++) {
            let box = document.createElement('div');
            box.className = "box";
            // Adjust width and height of box so that it gets smaller depending on amount //
            box.style.width = '26.2px';
            box.style.height = '26.2px';
            // Make every div element with a class of box a child of row //
            row.appendChild(box);
        }
        // Make every div element with a class of row a child of container //
        document.getElementById('container').appendChild(row);
        document.getElementById('container').style.width = '960px';
    }
}

// Change the background color of box during a mouse event //
function gridColor() {
    const divs = document.querySelectorAll(".box");
    divs.forEach( function(div) {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = randomColor;
        });
    });
}

// Create a function that randomly picks and return a rgb color value //
function getRandomColor() {
    let num = Math.round(0xffffff * Math.random());
    let red = num >> 16;
    let green = num >> 8 & 255;
    let blue = num & 255;
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

// Turn getRandomColor() into a variable that can be called globally //
// Add new variable into mouseover event listener //
let randomColor = getRandomColor();

// Create a function that clears the current grid and adds a prompt //
// Prompt must ask for how many squares per side to make a new grid //
// The new grid must be generated in the same total space as before //
// Set the limit for the user input to 100 //
function resetGrid() {
    let grids = document.querySelectorAll(".box")
    grids.forEach(function(grid){
        grid.addEventListener('click', function() {
            grid.parentNode.addChild(grid);
        });
        grid.parentNode.removeChild(grid);
    });
    gridNumber = Number(prompt("Enter grid amount: ", 16)); // Turns input into a number //
    if (Number(gridNumber) > 100) { // Checks if input is a number that is greater than 100 //
        prompt("Maximum number is 100. Please enter a new number.", '');
        return resetGrid();
    }
    makeGrid(gridNumber);
    gridColor(randomColor);
}