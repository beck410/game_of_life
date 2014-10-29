//set matrix
//var matrix = [ [0,1,0],[0,0,1],[1,1,1] ]
//random matrix
matrix = matrixCreator(50,150)
var $table = document.querySelector("#matrix");
var $tick = document.querySelector('input[type="submit"]')

document.addEventListener("DOMContentLoaded", function(event) {

    setInterval(function(){
      matrix = calculateNextState(matrix);
      conception(matrix)
    }, 100);
});


//poplulate table with matrix array for each generation
function conception (state) {
  //clear out all state of matrix
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
      var neighborCount = livingNeighborCount(currentState, x, y);

      if(neighborCount < 2){
      // Rule 1. Less than 2 neighbors = die of loneliness
         currentCell = 0;
      } else if(neighborCount > 3){
      // Rule 3. More than 3 neighbors = death by overpopulation
        currentCell = 0;
      } else if(neighborCount === 3){
      // Rule 4. Exactly 3 neighbors = birth
        currentCell = 1;
      }
      nextRow.push(currentCell);
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
function livingNeighborCount(currentState, x, y){
    //add each live neighbor to counter
    var n = 0;
    //loop through each neighbour
    //x-1, y-1
      if(cellTest(currentState, x, x-1, y-1)){
        n++
      }
    //x-1, y
      if(cellTest(currentState, x, x-1, y)){
        n++
      }
    //x-1, y+1
      if(cellTest(currentState, x, x-1, y+1)){
        n++
      }
    //x, y-1
      if(cellTest(currentState, x, x, y-1)){
        n++
      }
    //x, y+1
      if(cellTest(currentState, x, x, y+1)){
        n++
     }
    //x+1, y+1
      if(cellTest(currentState, x, x+1, y-1)){
        n++
      }
    //x+1, y
      if(cellTest(currentState, x, x+1, y)){
        n++
      }
    //x+1, y+1
      if(cellTest(currentState, x, x+1, y+1)){
        n++
      }
  return n;
}

//test whether neighbour of cell is on or off grid
function cellTest(state, row, x, y){
  if(x >= 0 &&  x < state.length && y >= 0 && y < state[row].length){
    if(state[x][y] === 1){
    return true;
  }
}  else{
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
