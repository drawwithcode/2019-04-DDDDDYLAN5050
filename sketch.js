var mySong;

function preload() {
  mySong = loadSound("./assets/keygen.mp3");
  ghost = loadImage("./assets/ghost.png");
  ghost0 = loadImage("./assets/ghost0.png");
  excla = loadImage("./assets/Excla.png");
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySong.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  imageMode(CENTER);

  frameRate(24);
  // put setup code here
}

function draw() {
  background(0);
  var lvl = analyzer.getLevel();
  console.log(lvl);
  // put drawing code here
  noStroke();
  fill(255, 255, 25);
  // rect(width / 2, height / 2, 10, -lvl * 100 + 1);

  if (frameCount < 189) {
    arc(width / 2 + random(lvl * 30) - (mouseX - width / 2) / 100, height / 2 + random(lvl * 30) - (mouseY - height / 2) / 100, 250, 250, PI + abs(sin(frameCount / 5)) / 2, PI - abs(sin(frameCount / 5)) / 2, PIE);
    image(ghost0, width / 540 * frameCount - 150 + random(-2, 2), height / 2 + random(-2, 2), 200 - random(-2, 2), 200 + random(-2, 2));

  } else if (frameCount >= 150 && mouseIsPressed) {
    arc(width / 2 + random(lvl * 30) - (mouseX - width / 2) / 50, height / 2 + random(lvl * 30) - (mouseY - height / 2) / 50, 250, 250, PI + 2 * constrain(0.35 - lvl, 0, 0.35), PI - 2 * constrain(0.35 - lvl, 0, 0.35), PIE);
    image(ghost0, width / 3 - 150 - lvl * 200 - random(lvl * 10), height / 2 + random(lvl * 10), 200 - random(lvl * 60), 200 + random(lvl * 60));
    image(excla, width / 3 - 200 - lvl * 100 - random(lvl * 2), height / 2 + random(lvl * 2) - 250, 200 - random(lvl * 10), 200 + random(lvl * 10));

    push();
    translate(width / 2, height / 2);

    fill(255, 255, 25);
    rect(150 + random(lvl * 50) - (mouseX - width / 2) / 50, random(lvl * 30) - 80 + (mouseY - height / 2) / 50, width / 4 * lvl + random(30), 15);
    rect(170 + random(lvl * 50) - (mouseX - width / 2) / 50, random(lvl * 30) + (mouseY - height / 2) / 50, width / 4 * lvl + random(30), 15);
    rect(150 + random(lvl * 50) - (mouseX - width / 2) / 50, random(lvl * 30) + 80 + (mouseY - height / 2) / 50, width / 4 * lvl + random(30), 15);
    pop();

    push();
    translate(width / 3 - 150, height / 2);

    fill('#274B9F');
    rect(100 + random(lvl * 50), random(lvl * 30) - 60, width / 7 * lvl + random(30), 10);
    rect(100 + random(lvl * 50), random(lvl * 30), width / 7 * lvl + random(30), 10);
    rect(100 + random(lvl * 50), random(lvl * 30) + 60, width / 7 * lvl + random(30), 10);
    pop();

  } else {
    arc(width / 2 + random(lvl * 30) - (mouseX - width / 2) / 50, height / 2 + random(lvl * 30) - (mouseY - height / 2) / 50, 200, 200, 2 * constrain(0.35 - lvl, 0, 0.35), -2 * constrain(0.35 - lvl, 0, 0.35), PIE);
    image(ghost, width / 3 - 150 + lvl * 200 + random(lvl * 10), height / 2 + random(lvl * 10), 200 - random(lvl * 60), 200 + random(lvl * 60));
    image(excla, width / 2 + random(lvl * 5) - (mouseX - width / 2) / 25 - 50, height / 2 + random(lvl * 2) - 250 - (mouseY - height / 2) / 25, 200 - random(lvl * 10), 200 + random(lvl * 10));

    push();
    translate(width / 2, height / 2);
    rotate(PI);
    fill(255, 255, 25);
    rect(100 + random(lvl * 50) + (mouseX - width / 2) / 50, random(lvl * 30) - 60 + (mouseY - height / 2) / 50, width / 7 * lvl + random(30), 10);
    rect(120 + random(lvl * 50) + (mouseX - width / 2) / 50, random(lvl * 30) + (mouseY - height / 2) / 50, width / 7 * lvl + random(30), 10);
    rect(100 + random(lvl * 50) + (mouseX - width / 2) / 50, random(lvl * 30) + 60 + (mouseY - height / 2) / 50, width / 7 * lvl + random(30), 10);
    pop();

    push();
    translate(width / 3 - 150, height / 2);
    rotate(PI);
    fill(255, 25, 25);
    rect(100 + random(lvl * 50), random(lvl * 30) - 60, width / 4 * lvl + random(30), 10);
    rect(100 + random(lvl * 50), random(lvl * 30), width / 4 * lvl + random(30), 10);
    rect(100 + random(lvl * 50), random(lvl * 30) + 60, width / 4 * lvl + random(30), 10);
    pop();

    drawingContext.font = "Regular 30px Press Start 2P";
    drawingContext.textAlign = "center";
    text('Press2FightBack', width-frameCount, height / 2+250);
  }
}
