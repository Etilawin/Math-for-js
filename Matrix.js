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

  this.sub = function(other){
    if(other instanceof Matrix){
      if(other.rows === this.rows && other.cols === this.cols){
        var r = this.rows;
        var c = this.cols;
        for(var i = 0; i < r; i++){
          for(var j = 0; j < c; j++){
            this.matrix[i][j] -= other.matrix[i][j];
          }
        }
      } else {
        console.log("Matrix isn't of the same dimension")
      }
    } else {
      console.log("Couldn't add a non-matrix");
    }
  }

  this.mult = function(other){
    if(other instanceof Matrix){
      if(this.cols === other.rows){
        var newMatrix = newMatrix(this.rows, other.cols);
        var line;
        for(var i = 0; i < this.rows; i++){
          line = 0;
          for(var j = 0; j < other.cols; j++){
            for(var g = 0; g < other.rows; g++){
              line += other.matrix[g][j]*this.matrix[i][] // TODO
            }
          }
        }
      }
    }
  }
}
