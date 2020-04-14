
let cols = 10;
let rows = 10;
let w;
let h;

let grid = new Array(cols);

let start;
let end;

let openSet = [];
let closedSet = [];

function removeFromArray(arr, elt){
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] == elt){
      arr.splice(i,1);
    }
  }
}

function setup(){
  createCanvas(450,450);
  w = width/cols;
  h = height/rows;


 for(let i = 0; i < cols; i ++){
   grid[i] = new Array(rows);
 }

  for(let i = 0; i < cols; i ++){
    for(let j = 0; j < rows; j ++){
      grid[i][j] = new Spot(i,j);
    }
  }

  for(let i = 0; i < cols; i ++){
    for(let j = 0; j < rows; j ++){
      grid[i][j].addNeighbors();
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows -1];

  openSet.push(start);

  console.log(grid);

}

function draw(){
  background(250);

  if(openSet.length > 0){

    let winner = 0;

    for(let i = 0; i < openSet.length; i++){
      if(openSet[i].f < openSet[winner].f){
        winner = i;
        console.log("Found winner");
      }

      let current = openSet[winner];

      if(current === end){
        console.log("DONE!");
      }

      removeFromArray(openSet,current);
      closedSet.push(current);

    }

  } else {

  }

  for(let i = 0; i < cols;i ++){
    for(let j = 0; j < rows; j++){
      grid[i][j].show(color(255));
    }
  }

  for(let i = 0; i < closedSet.length; i++){
    closedSet[i].show(color(255,0,0));
  }

  for(let i = 0; i < openSet.length; i++){
    openSet[i].show(color(0,255,0));
  }

}
