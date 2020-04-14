
function Spot(i,j){
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];

  this.show = function(col){
    fill(col);
    stroke(0);
    rect(this.i * w, this.j * h, w, h);
  }

  this.addNeighbors = function(){

    let i = this.i;
    let j = this.j;

    if(i < cols-1){
      this.neighbors.push(grid[i + 1][j]);
    }
    if(i > 0){
      this.neighbors.push(grid[i - 1][j]);
    }
    if(j < rows -1){
      this.neighbors.push(grid[i][j + 1]);
    }
    if(j > 0){
      this.neighbors.push(grid[i][j - 1]);
    }

  }

}
