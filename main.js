// global variables
let atomWidth = 10;
let currentState = [];
let rootState = [];
let startingPosition = 5;
let flowingDown = 0;

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
    try{
        if(previousPositions.length > 0){  
            cleanup(previousPositions)
        }
    
        lShapes[2].forEach(index => { 
            rootState[startingPosition+ index + atomWidth*flowingDown ].className = "atom-box tetromino"
            previousPositions.push(startingPosition+ index + atomWidth*flowingDown);
        });
    }catch(e){
        previousPositions = []
        clearInterval(runShapes)
    }
} 

const runShapes = setInterval(() => { 
    flowingDown =flowingDown + 2
    draw();
}, 1000);


// moving shape left and right
document.addEventListener("keydown", (e)=>{
    console.log(e.keyCode)
    if(e.keyCode === 39){
        startingPosition++;
    }
    if(e.keyCode === 37){
        startingPosition--;
    }
})

