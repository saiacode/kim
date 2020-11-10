function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return createVector(x, y);
}

function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6;
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
}


function testLines() {
  noFill();
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  for (let i = 0; i < SIDES; i++) {
    line(0, 0, CRYSTAL_SIZE / 2, 0);
    rotate(360 / SIDES);
  }
  pop();
}

function myTriangle(center, radius, direction) {
    if (direction) {
        beginShape()
        vertex(center + radius* cos(0), radius* sin(0))
        vertex(center + radius* cos(120), radius* sin(120))
        vertex(center + radius * cos(240), radius * sin(240))
        endShape(CLOSE)
    } else {
            beginShape()
        vertex(center + radius* cos(180), radius* sin(180))
        vertex(center + radius* cos(120), radius* sin(120))
        vertex(center + radius * cos(240), radius * sin(240))
        endShape(CLOSE)
    }