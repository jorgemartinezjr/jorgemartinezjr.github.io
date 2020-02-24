function setup() {
  createCanvas(800, 600);
}
let time = null;
function draw() {
    let h = hour();
    let m = minute();
    let s = second();
    
    if (m != time){
        console.log("minute: "+minute());
        time = m;
     }

    background(0);
    noStroke();
    textSize(32);
    fill(255);
    text(h, 10, 30);
    fill(180);
    text(m, 10, 60);
    fill(100);
    text(s, 10, 90);
    
    let mapSec = map(s,0,60,0,360);
    let mapMin = map(m,0,60,0,360);
    let mapHr = map(h,0,24,0,360);

    translate(400,300);
    rotate(3*HALF_PI);
    noFill();
    strokeWeight(5);

    stroke(138,43,226);
    arc(0,0,300,300,0,mapSec*PI/180,PIE);

    stroke(0,0,255);
    arc(0,0,200,200,0,mapMin*PI/180,PIE);

    stroke(0,191,255);
    arc(0,0,100,100,0,mapHr*PI/180,PIE);
      
      
  
}
