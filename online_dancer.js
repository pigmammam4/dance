var dancer;
var right;
var left;
var boog;

function setup() {
  createCanvas(450,653);
  dancer = loadImage("dancer.jpg");
  right = loadImage("right.gif");
  left = loadImage("left.gif");
  boog = loadImage("boog.gif");
}

function draw() {
  image(dancer,0,0);
  if(mouseButton == LEFT) {
    image(right,368,170,50,50);
    image(left,215,320,50,50);
    image(boog,-20,300,200,200);
    fill(255,0,0);
    noStroke();
    ellipse(306,267,5,5);
    ellipse(288,279,4,4);
  }
}
