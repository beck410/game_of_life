//create initial matrix in array
var matrix = [ [0, 1, 0], [0, 0, 1], [1, 1, 1] ];
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
    row.forEach(function(){
      var $td = document.createElement("td");
      $tr.appendChild($td);
    });
  })
}

