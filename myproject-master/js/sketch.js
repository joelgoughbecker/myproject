var widthRect = 50;
var heightRect = 50;

let angle = 0;

function preload(){
  img1 = loadImage("images/Untitled-1.png")
}

function setup() {
  createCanvas(800, 800); //sie of the canvas
  
}
function mousePressed(){

  if(mouseButton ==RIGHT){
    fill(255, 255, 255);
    rectMode(CENTER);
    ellipse(mouseX,mouseY,widthRect,heightRect);
  }
 }
function draw() {
  background(158,229,221); //color of the background
//   angle = slider.value();
  angle = 0.42
//   console.log(slider.value())
  stroke(124,70,58); //color of the stroke
 
  strokeWeight(2); //how wide the troke iss
  translate(width * 0.5, height);
  branch(200);



  stroke(124,70,58);

  strokeWeight(39); //main trunk
line(1, 1,1, 200);

triangle(-90, 241, 2, 241, 0, 155); //stump
triangle(39, 181, 40, 233, 114, 234);

stroke(124,70,58)//first 2 brances
strokeWeight(20)
line(60, -120 ,0, 15);
line(-50, -120 ,-5, 15);

stroke(124,70,58)//second 4 branches
strokeWeight(11)
line(60, -120 ,57, -220);
line(60, -125 ,125, -190);

line(-55, -125 ,-125, -190);
line(-55, -125 ,-57, -225);


image(img1,0,0,-20,-20)
}

 

function branch(len) {  // end branches
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.70);//end  branch length and curviture
    pop(); // brings the branches up
    push();
    rotate(-angle);
    branch(len * 0.70);
    pop();

    
  }
  

    }
  