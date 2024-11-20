// global variables -----------------------------
// position variables -----
let x = 100;
let y = 100;

let characterX;
let characterY = -300;

let trampolineX = 1660;
let trampolineY = 1630;

// game logic variables -----
let speed = 0.2;
let gameState = false;
let screen = "start";

function setup() {
  characterX = Math.random() * (width / 0.3);
  createCanvas(1000, 500);
}

function startGame(x, y) {
  // background -----------------------------------
  fill(45, 116, 73);
  rect(x - 100, y - 100, 1000, 500);

  // button ---------------------------------------
  // rectangle
  fill(255);
  strokeWeight(7);
  stroke(22, 63, 34);
  rect(x + 300, y + 100, 200, 100, 10);

  // "start" text
  textSize(45);
  textStyle(BOLD);
  fill(22, 63, 34);
  noStroke();
  text("START", x + 328, y + 165);

  // instructions text ----------------------------
  // "help the panda..." text ------
  textSize(20);
  textStyle(BOLD);
  fill(255);
  noStroke();
  text("Help the panda to", x + 315, y + 40);
  text("land on the trampoline!", x + 290, y + 70);

  // "use the arrows..." text ------
  textSize(12);
  textStyle(BOLD);
  fill(255);
  noStroke();
  text("Use the arrows on your keyboard", x + 307, y + 235);
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
  scale(0.3);
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

function loseGame(x, y) {
  screen = "lose";
  // background -----------------------------------
  fill(45, 116, 73);
  rect(x - 100, y - 100, 1000, 500);

  // "you lost" text ------
  textSize(25);
  textStyle(BOLD);
  fill(255);
  noStroke();
  text("YOU LOST :(", x + 328, y + 80);

  // button ---------------------------------------
  // rectangle -----
  fill(255);
  strokeWeight(7);
  stroke(22, 63, 34);
  rect(x + 300, y + 100, 200, 100, 10);

  // start -----
  textSize(29);
  textStyle(BOLD);
  fill(22, 63, 34);
  noStroke();
  text("PLAY AGAIN", x + 314, y + 160);
}

function winGame(x, y) {
  screen = "win";
  // background -----------------------------------
  fill(45, 116, 73);
  rect(x - 100, y - 100, 1000, 500);

  // "you lost" text ------
  textSize(25);
  textStyle(BOLD);
  fill(255);
  noStroke();
  text("YOU WON :D", x + 325, y + 80);

  // button ---------------------------------------
  // rectangle -----
  fill(255);
  strokeWeight(7);
  stroke(22, 63, 34);
  rect(x + 300, y + 100, 200, 100, 10);

  // start -----
  textSize(29);
  textStyle(BOLD);
  fill(22, 63, 34);
  noStroke();
  text("PLAY AGAIN", x + 314, y + 160);
}

function draw() {
  // check if game has not started yet ----------
  if (!gameState) {
    startGame(x, y);
    // started game -----------------------------
  } else {
    completeBackground();
    character(characterX, characterY);
    trampoline(trampolineX, trampolineY);

    // speed -----
    characterY = characterY + speed;

    // arrows -----
    // up arrow
    if (keyIsDown(38)) {
      speed = speed - 0.1;
    } else {
      speed = speed + 0.1;
    }

    // left arrow
    if (keyIsDown(37)) {
      characterX = characterX - speed;
      // right arrow
    } else if (keyIsDown(39)) {
      characterX = characterX + speed;
    }

    // game outcome logic -----
    // if character has fallen below the trampoline
    if (characterY + 220 > trampolineY) {
      // if the character lands on the trampoline
      if (
        characterX - 40 > trampolineX - 80 &&
        characterX + 40 < trampolineX + 80 &&
        characterY + 220 > trampolineY &&
        speed <= 10
      ) {
        // win game
        winGame(x, y);
        noLoop();
        // lose game
      } else {
        loseGame(x, y);
        noLoop();
      }
    }
  }
}

function mousePressed() {
  // start screen ------------------------------
  if (screen === "start") {
    // "start" button
    if (
      mouseX > x + 300 && // left
      mouseX < x + 300 + 200 && // right
      mouseY > y + 100 && // top
      mouseY < y + 100 + 100 // bottom
    ) {
      // play game
      gameState = true;
      screen = "game";
    }

    // "win" & "lose" screen -------------------
  } else if (screen === "win" || screen === "lose") {
    // "play again" button
    if (
      mouseX > x + 300 && // left
      mouseX < x + 300 + 200 && // right
      mouseY > y + 100 && // top
      mouseY < y + 100 + 100 // bottom
    ) {
      // reset the game
      characterX = Math.random() * (width / 0.3);
      characterY = -300;
      speed = 0.2;

      gameState = true;
      screen = "start";

      // restart draw loop to refresh game state
      loop();
    }
  }
}
