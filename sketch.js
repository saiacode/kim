

const CRYSTAL_SIZE = 500
const SIDES = 6


function setup() {
createCanvas(530,530, SVG)
    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    const layer = new Circles()
    layer.render()
//     testLines()
//    outlineShape()
//     simpleLines()
//     circles()
}

function simpleLines() {
    const stepsOut = 8
    const numSteps = floor(stepsOut * 1.25)
    const step = (CRYSTAL_SIZE / 2) / numSteps
    const start = floor(random(0, numSteps))
    const stop = floor(random(start, numSteps + 1))


         noFill();
         push();
         translate(width / 2, height / 2);
         ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
         for (let i = 0; i < SIDES; i++) {
           line(start * step, 0, stop * step, 0);
           rotate(360 / SIDES);
         }
         pop();
}


function outlineShape() {
    stroke('black')
    strokeWeight(5)
    push()
    translate(width / 2, height / 2)
    // ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    // myline()
    hexagon(0,0, CRYSTAL_SIZE/2)
    pop()
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