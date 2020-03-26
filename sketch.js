var canvas;
var form;



function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-80);
  database = firebase.database();
  form = new Form();
  
}


function draw(){
 form.display();
}
