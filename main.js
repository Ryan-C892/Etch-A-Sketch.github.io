// Create a grid of square divs //
// Create a variable that is equal to the container //
const container = document.querySelector("#container");
// Create a variable that is equal to the reset button //
const reset = document.querySelector("#reset");
// Create a global variable that will be equal to the number of square divs entered in prompt //
let gridNumber;
// Create a global variable that will be equal to every div with a class of 'box' //
let gridBoxes;
// Create a function that turns container into a grid and creates an equal number //
// of rows and columns that are the same number entered in prompt //
function createGrid(gridNumber) {
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    // Create a for loop that will create divs with the class 'box' //
    // Append div as child to container //
    // For loop will iterate through gridnumber twice to represent two dimensions //
    for (let i = 0; i < gridNumber * gridNumber; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    // let gridBoxes turn 'box' into an array //
    // Create a forEach function that will look for every 'box'//
    // Create an event listner that will mouseover every 'box' //
    gridBoxes = document.querySelectorAll(".box");
    gridBoxes.forEach( function(gridBox) {
        gridBox.addEventListener('mouseover', function() {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let randomColor = 'rgb(' + x + ', ' + y + ', ' + z + ')';
            gridBox.style.opacity = (parseFloat(gridBox.style.opacity) || 0) + 0.2;
            gridBox.style.backgroundColor = randomColor;
        });
    });
}

// Create an event listener for reset button //
// gridboxes forEach() gridbox remove child from container //
reset.addEventListener( 'click', function() {
    gridBoxes.forEach( function (gridBox) {
        container.removeChild(gridBox);
    });
    // Within the event listener run the prompt and call createGrid() //
    gridNumber = prompt("Enter the numbers for the grid.", 16);
    if (parseInt(gridNumber) > 100) {
        alert("Please enter a number less than 100.");
        return gridNumber;
    }
    createGrid(gridNumber);
});
createGrid(gridNumber);