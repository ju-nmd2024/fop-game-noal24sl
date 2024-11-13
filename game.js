// global variables -----------------------------
// position variables -----
let x = 100;
let y = 100;

let characterX = 100;
let characterY = 100;

// game logic variables -----
let velocityY = 0.2;
let acceleration = 0.2;

// game state variables -----
let gameState = true;

function setup() {
  createCanvas(1000, 500);
}

function backtrees(x, y) {
  noStroke();
  fill(35, 88, 56);
  ellipse(x - 20, y + 240, 200);
  ellipse(x + 100, y + 250, 100);
  ellipse(x + 170, y + 300, 150);
  ellipse(x + 270, y + 320, 80);
  ellipse(x + 350, y + 350, 130);
  ellipse(x + 450, y + 350, 150);
  ellipse(x + 520, y + 290, 80);
  ellipse(x + 600, y + 270, 130);
  ellipse(x + 650, y + 250, 150);
  ellipse(x + 700, y + 200, 80);
  ellipse(x + 820, y + 240, 220);

  rect(x - 100, y + 210, 200, 300);
  rect(x, y + 310, 600, 190);
  rect(x + 600, y + 210, 600, 300);
}

function treeLightBackground(x, y) {
  // tree ---------------------------------------
  // leaves -----
  // showing
  push();
  fill(22, 63, 34);
  translate(x, y + 20);
  ellipse(0, 0, 100, 80);
  pop();

  // erase
  push();
  fill(45, 116, 73);
  translate(x + 10, y + 20);
  ellipse(0, 0, 80, 100);
  pop();

  // showing
  push();
  fill(46, 82, 28);
  translate(x + 35, y + 50);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // erase
  push();
  fill(45, 116, 73);
  translate(x + 35, y + 80);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // showing
  push();
  fill(166, 179, 105);
  translate(x - 110, y + 50);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // erase
  push();
  fill(45, 116, 73);
  translate(x - 100, y + 70);
  rotate(0.2);
  ellipse(0, 0, 150, 80);
  pop();

  // stem -----
  beginShape();
  fill(95, 68, 40);
  noStroke();
  vertex(x - 80, y + 500);
  bezierVertex(x - 10, y + 300, x - 70, y - 420, x, y + 500);
  endShape();
}

function treeDarkBackground(x, y) {
  // tree ---------------------------------------
  // leaves -----
  // showing
  push();
  fill(22, 63, 34);
  translate(x, y + 20);
  ellipse(0, 0, 100, 80);
  pop();

  // erase
  push();
  fill(35, 88, 56);
  translate(x + 10, y + 20);
  ellipse(0, 0, 80, 100);
  pop();

  // showing
  push();
  fill(46, 82, 28);
  translate(x + 35, y + 50);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // erase
  push();
  fill(35, 88, 56);
  translate(x + 35, y + 80);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // showing
  push();
  fill(166, 179, 105);
  translate(x - 110, y + 50);
  rotate(0.2);
  ellipse(0, 0, 150, 100);
  pop();

  // erase
  push();
  fill(35, 88, 56);
  translate(x - 100, y + 70);
  rotate(0.2);
  ellipse(0, 0, 150, 80);
  pop();

  // stem -----
  beginShape();
  fill(95, 68, 40);
  noStroke();
  vertex(x - 80, y + 500);
  bezierVertex(x - 10, y + 300, x - 70, y - 420, x, y + 500);
  endShape();
}

function character(x, y) {
  push();
  // scale -----------------------------------------
  scale(0.2);
  // arms ------------------------------------------
  fill(0, 0, 0);
  noStroke();

  // left
  push();
  translate(x - 70, y + 70);
  rotate(-0.4);
  ellipse(0, 0, 40, 80);
  pop();

  // right
  push();
  translate(x + 70, y + 70);
  rotate(0.4);
  ellipse(0, 0, 40, 80);
  pop();

  // legs ------------------------------------------
  // left
  ellipse(x - 40, y + 200, 45, 90);

  // right
  ellipse(x + 40, y + 200, 45, 90);

  // body ------------------------------------------
  // black
  ellipse(x, y + 120, 150, 160);

  // white
  fill(255, 255, 255);

  beginShape();
  vertex(x - 75, y + 120);
  bezierVertex(x - 65, y + 50, x + 65, y + 50, x + 75, y + 120);
  endShape();

  beginShape();
  vertex(x - 75, y + 120);
  bezierVertex(x - 110, y + 230, x + 120, y + 230, x + 75, y + 120);
  endShape();

  // ears ------------------------------------------
  fill(0, 0, 0);

  // left
  push();
  translate(x - 55, y - 30);
  rotate(-0.75);
  ellipse(0, 0, 40, 50);
  pop();

  // right
  push();
  translate(x + 55, y - 30);
  rotate(0.75);
  ellipse(0, 0, 40, 50);
  pop();

  // head ------------------------------------------
  fill(255, 255, 255);
  ellipse(x, y + 5, 140, 110);

  // cheeks ----------------------------------------
  fill(253, 194, 228);

  // left
  push();
  translate(x - 50, y + 22);
  rotate(0.5);
  ellipse(0, 0, 22);
  pop();

  // right
  push();
  translate(x + 50, y + 22);
  rotate(-0.5);
  ellipse(0, 0, 22);
  pop();

  // eyes ------------------------------------------
  // around eye -----
  fill(0, 0, 0);

  // left
  push();
  translate(x - 35, y);
  rotate(0.5);
  ellipse(0, 0, 40, 50);
  pop();

  // right
  push();
  translate(x + 35, y);
  rotate(-0.5);
  ellipse(0, 0, 40, 50);
  pop();

  // inside eyes -----
  fill(255, 255, 255);

  // left
  push();
  translate(x - 35, y);
  ellipse(0, 0, 7);
  pop();

  // right
  push();
  translate(x + 35, y);
  ellipse(0, 0, 7);
  pop();

  // nose ------------------------------------------
  // base
  push();
  fill(0, 0, 0);
  translate(x, y + 15);
  triangle(-12, 0, 0, 12, 12, 0);
  pop();

  // mouth -----------------------------------------
  noFill();
  strokeWeight(3);
  stroke(0, 0, 0);

  ellipse(x, y + 37, 15, 20);

  pop();
}

function trampoline(x, y) {
  push();
  // scale -----------------------------------------
  scale(0.3);
  // mat -------------------------------------------
  strokeWeight(6);
  stroke(0, 0, 0);
  fill(255, 0, 255);
  ellipse(x, y, 180, 50);

  // legs ------------------------------------------
  strokeWeight(6);
  stroke(0, 0, 0);

  line(x - 90, y, x - 90, y + 40);
  line(x + 90, y, x + 90, y + 40);

  line(x - 70, y + 16, x - 70, y + 40);
  line(x + 70, y + 16, x + 70, y + 40);
  pop();
}

function completeBackground() {
  background(45, 116, 73);

  // background trees----------------------------
  backtrees(x, y - 50);

  // trees --------------------------------------
  treeLightBackground(x, y - 60);
  treeLightBackground(x + 850, y - 60);

  push();
  scale(0.3);
  treeDarkBackground(x + 450, y + 1100);
  treeDarkBackground(x + 1150, y + 1200);
  treeDarkBackground(x + 1600, y + 1200);
  treeDarkBackground(x + 2700, y + 1100);
  pop();

  push();
  scale(0.8);
  treeLightBackground(x + 650, y + 100);
  treeLightBackground(x + 300, y + 100);
  pop();

  push();
  scale(0.6);
  treeLightBackground(x + 650, y + 300);
  treeDarkBackground(x + 1200, y + 300);
  pop();

  push();
  scale(0.5);
  treeDarkBackground(x + 300, y + 500);
  treeDarkBackground(x + 1300, y + 500);
  pop();
}

function draw() {
  completeBackground();

  // character ----------------------------------
  character(characterX + 2400, characterY);

  // character logic -----
  characterY = characterY + velocityY;
  velocityY = velocityY + acceleration;

  // trampoline ---------------------------------
  trampoline(x + 1560, y + 1530);
}
