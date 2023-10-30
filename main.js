// global variables
let atomWidth = 10; 
let currentState = [];
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
        // atomBox.innerText = `${i}`;
        currentState.push(atomBox);
    } 
});

const cleanup = (indexes) => {
    indexes.forEach(index => { 
        currentState[index].className = "atom-box" 
    });
    previousPositions = [];
};

const isMovable = (shape) => {
    for (const index of shape) {
        if(!currentState[startingPosition+ index + atomWidth*flowingDown]){
            return false
         }
    } 
    return true;
};

const draw = () => {
    try{ 
        let _isMovable = isMovable(lShapes[2]);
        if(previousPositions.length > 0 && _isMovable){  
            cleanup(previousPositions)
        } 

        if(_isMovable){
            lShapes[2].forEach(index => {  
                currentState[startingPosition+ index + atomWidth*flowingDown].className = "atom-box tetromino"
                previousPositions.push(startingPosition+ index + atomWidth*flowingDown); 
            }); 
        }else {
            previousPositions = []
            clearInterval(runShapes)
        } 
        
    }catch(e){
        previousPositions = []
        clearInterval(runShapes)
    }
} 

const runShapes = setInterval(() => { 
    flowingDown =flowingDown + 1
    draw();
}, 100);


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

