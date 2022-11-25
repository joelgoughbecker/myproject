
var x,y,r, speed;



function setup( ) {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    r = 200;
    speed = 50;
}

function draw() {
    background(220); 
    
    y++;
    //x++;

    y = y + speed;
    fill (255,255,255);
    ellipse(x, y, 200);
    if(y > height){
        y = 0;
    }
    fill (255,255,255);
    ellipse(x,y,r);

}


