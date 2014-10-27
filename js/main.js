//create initial matrix in array
var matrix = matrixCreator(3,3)
var $table = document.querySelector("#matrix");

document.addEventListener("DOMContentLoaded", function(event) {
  conception(matrix);
});


//poplulate table with matrix array
function conception (matrix) {
  //clear out all state of matrix
  $table.innerHTML = "";
  //update matrix
  matrix.forEach(function(row){
    //generate rows <tr>
    var $tr = document.createElement("tr");
    $table.appendChild($tr);
    //generate columns <td>
    row.forEach(function(cell){
      var $td = document.createElement("td");
      $tr.appendChild($td);
      $td.innerHTML = cell
    });
  })
}

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
