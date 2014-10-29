//set matrix
document.addEventListener("DOMContentLoaded", function(event){
//var matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,0]]
//random matrix
var matrix = matrixCreator(50,150);
conception(matrix);
var $tick = document.querySelector('#tick');
var $loop = document.querySelector('#loop');

    //setInterval(function(){
    $tick.addEventListener("click",function(event){
      event.preventDefault();
      matrix = calculateNextState(matrix);
      conception(matrix)
      });

    $loop.addEventListener("click",function(event){
      event.preventDefault();
      setInterval(function(){
      matrix = calculateNextState(matrix);
      conception(matrix);
      }, 500)
    });


//poplulate table with matrix array for each generation
function conception (state) {
  //clear out all state of matrix
  var $table = document.querySelector("#matrix");
  $table.innerHTML = "";
  //generate rows <tr>
  state.forEach(function(row){

    var $tr = document.createElement("tr");
    //generate columns <td>
    row.forEach(function(cell){
      var $td = createTR(cell);
      $tr.appendChild($td);
    });
    $table.appendChild($tr)
  });
}

function calculateNextState(currentState){
  var nextState = [];
  currentState.forEach(function(currentRow, x){
    var nextRow = [];
    currentRow.forEach(function(currentCell, y){
      var neighborCount = livingNeighborCount(currentState, currentRow, x, y);
      var newCell;
      if(neighborCount < 2){
      // Rule 1. Less than 2 neighbors = die of loneliness
          newCell = 0;
      } else if(neighborCount > 3){
      // Rule 3. More than 3 neighbors = death by overpopulation
        newCell = 0;
      } else if(neighborCount === 3){
      // Rule 4. Exactly 3 neighbors = birth
        newCell = 1;
      } 
      else {
        newCell = currentCell;
      }
      nextRow.push(newCell);
    });
    nextState.push(nextRow);
  });
  return nextState;
}

//create new cols and add value
function createTR(value){
  var $td = document.createElement('td');
  if(value === 1){
    $td.classList.add('alive');
  } else{
    $td.classList.add('dead');
  }
  return $td;
}

//find no. count for living neighbours of cell(td)
function livingNeighborCount(currentState, currentRow, x, y){
    //add each live neighbor to counter
    var n = 0;
    //loop through each neighbour
    //x-1, y-1
      if(cellTest(currentState, currentRow, x-1, y-1)){
        n++
      }
    //x-1, y
      if(cellTest(currentState, currentRow, x-1, y)){
        n++
      }
    //x-1, y+1
      if(cellTest(currentState, currentRow, x-1, y+1)){
        n++
      }
    //x, y-1
      if(cellTest(currentState, currentRow, x, y-1)){
        n++
      }
    //x, y+1
      if(cellTest(currentState, currentRow, x, y+1)){
        n++
     }
    //x+1, y+1
      if(cellTest(currentState, currentRow, x+1, y-1)){
        n++
      }
    //x+1, y
      if(cellTest(currentState, currentRow, x+1, y)){
        n++
      }
    //x+1, y+1
      if(cellTest(currentState, currentRow, x+1, y+1)){
        n++
      }
  return n;
}

//test whether neighbour of cell is on or off grid
function cellTest(state, row, x, y){
  var i = x;
  var j = y;

  if(i < 0){
    i = state.length-1;
  }
  if(i > state.length-1) {
    i = 0;
  }
  if(j < 0){
    j = row.length-1
  }
  if(j > row.length-1){
    j = 0; 
  }

  if(state[i][j] === 1){
    return true;
  } else {
    return false;
  }
} 
     

//random matrix
function matrixCreator(row,col) {
  var matrix = [];
  for(var i=0; i<row; i++) {
    matrix[i] = [];
    for(var j=0; j<col; j++){
      matrix[i][j] = Math.round(Math.random())
    }
  }
  return matrix;
}
});
