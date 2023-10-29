// global variables
let atomWidth = 10;
let currentState = [];
// Shapes Definitions
// L 
const lShapes = [
    [1, 2, atomWidth + 1, atomWidth*2 + 1,],
    [atomWidth,  atomWidth + 1, atomWidth + 2 , atomWidth*2 + 2],
    [atomWidth*2, atomWidth*2+1, atomWidth + 1, 1],
    [atomWidth, atomWidth*2, atomWidth*2 +1, atomWidth*2 + 2]
] 



document.addEventListener("DOMContentLoaded",() => {
    console.log("work");
    var gridElement = document.getElementById("grid");
     
    for(var i = 0; i < 200; i++){
        var atomBox = document.createElement("div"); 
        atomBox.id = `atom-box-${i+1}`;
        atomBox.className = `atom-box`;
        gridElement.appendChild(atomBox)
        atomBox.innerText = `${i}`;
        currentState.push(atomBox);
    }

    console.log(currentState);
    lShapes[2].forEach(index => {
        console.log(index);
        currentState[index].className = "atom-box tetromino"
    }) 
});