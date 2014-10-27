//create initial matrix in array
//var matrix = matrixCreator(10,10)
var $table = document.querySelector("#matrix");

document.addEventListener("DOMContentLoaded", function(event) {
  setInterval(function(x){conception()}, 100);
});


//poplulate table with matrix array
function conception (matrix) {
  var matrix = matrixCreator(10,10)
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
      $td.style.height= "20px";
      $td.style.width= "20px";
      if(cell === 1){
        $td.style.background="red";
      }
      else{
        $td.style.background="blue"
      }
      $tr.appendChild($td);
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
