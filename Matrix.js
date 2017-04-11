function createNDimArray(dimensions) {
    if (dimensions.length > 0) {
        var dim = dimensions[0];
        var rest = dimensions.slice(1);
        var newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = createNDimArray(rest);
        }
        return newArray;
     } else {
        return undefined;
     }
 }

function Matrix(a,b){
  // Defines a matrix of dimension a and b
  this.matrix = createNDimArray(a, b);
  this.rows = a;
  this.cols = b;
  this.add = function(other){
    if(other instanceof Matrix){
      if(other.rows === this.rows && other.cols === this.cols){
        var r = this.rows;
        var c = this.cols;
        for(var i = 0; i < r; i++){
          for(var j = 0; j < c; j++){
            this.matrix[i][j] += other.matrix[i][j];
          }
        }
      }
    }
  }
}
