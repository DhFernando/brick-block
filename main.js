// global variables
let atomWidth = 10;
let currentState = [];
let rootState = [];
let startingPosition = 5;
let floatingPosition = 0;

let previousPositions = [];
// Shapes Definitions
// L 
const lShapes = [
    [1, 2, atomWidth + 1, atomWidth*2 + 1,],
    [atomWidth,  atomWidth + 1, atomWidth + 2 , atomWidth*2 + 2],
    [atomWidth*2, atomWidth*2+1, atomWidth + 1, 1],
    [atomWidth, atomWidth*2, atomWidth*2 +1, atomWidth*2 + 2]
] 

document.addEventListener("DOMContentLoaded",() => { 
    var gridElement = document.getElementById("grid");
     
    for(var i = 0; i < 200; i++){
        var atomBox = document.createElement("div"); 
        atomBox.id = `atom-box-${i+1}`;
        atomBox.className = `atom-box`;
        gridElement.appendChild(atomBox)
        atomBox.innerText = `${i}`;
        rootState.push(atomBox);
    } 
});

const cleanup = (indexes) => {
    indexes.forEach(index => { 
        rootState[index].className = "atom-box" 
    });
    previousPositions = [];
};

const draw = () => {
    if(previousPositions.length > 0){  
        cleanup(previousPositions)
    }

    lShapes[2].forEach(index => { 
        rootState[startingPosition+ index + atomWidth*floatingPosition ].className = "atom-box tetromino"
        previousPositions.push(startingPosition+ index + atomWidth*floatingPosition);
    });
} 



setInterval(() => { 
    floatingPosition++
    draw();
}, 1000);

