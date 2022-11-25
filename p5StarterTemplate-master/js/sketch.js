

var mysong, amplitude;

function preload(){  //loads the song in first
     mysong = loadSound('assets/massiveAttackAngel.mp3') 
}
function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

play = false
rectMode(CENTER);
background(0);
var button = createButton('play');
button.position(width/2, height/2);
button.addClass('btn');

 
 button.mousePressed(function(){
    play = true;
    mysong.play();
    button.hide();


 })

   
noStroke();
     amplitude = new p5.Amplitude();


}
 
function draw() {
    background(220);
var level = amplitude.getLevel();
console.log(level);

var vol = map(level,0,1,0,1000)
var col = map(level,0,1,0,255); //

background(col); //background colour

if(vol > 200){
    fill(col + 10);
    ellipse(width/2, height/2, vol + 100);  //ellipse col
}

    fill(col, 255, 255);
    ellipse(width/2, height/2, vol);

    fill(col, 255, col);
    ellipse(width/2, height/2, vol/2);
}