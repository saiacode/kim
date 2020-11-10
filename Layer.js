class Layer {
  constructor() {
    this.sides = SIDES;
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 1;
      this.thickStroke = 3;
      this.layerColor = 'black'
  }
}

class Circles extends Layer {
  constructor() {
    super();
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
    this.position = CRYSTAL_SIZE / 2 - this.shapeSize / 2;
  }
    render() {
      noFill()
    push();
    translate(width / 2, height / 2);
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize);
      rotate(this.angle);
    }
    pop();
  }
}

class SimpleLines extends Layer {
    constructor() {
        super();
        this.numSteps = floor(this.stepsOut * 1.25);
        this.step = CRYSTAL_SIZE / 2 / this.numSteps;
        this.start = floor(random(0, this.numSteps));
        this.stop = floor(random(this.start, this.numSteps + 1));
    }

    render() {
        noFill()
        
            push();
            translate(width / 2, height / 2);
            // ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
            for (let i = 0; i < this.numShapes; i++) {
              line(this.start * this.step, 0, this.stop * this.step, 0);
              rotate(this.angle);
            }
            pop();
    }
}

class OutlineShape extends Layer {
    constructor() {
        super()
    }

    render() {
        stroke('black')
        strokeWeight(5)
            push();
            translate(width / 2, height / 2);
            // ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
            // myline()
            hexagon(0, 0, CRYSTAL_SIZE / 2);
            pop();
    }
}

class DottedLines extends Layer {
    constructor() {
        super()
        this.numShapes = this.sides *2
        this.angle = 360 / this.numShapes
        this.shapeSize = 3
        this.centerOffset = this.singleStep
    }

    render() {
        fill(this.layerColor)
        noStroke()
        push()
        translate(width / 2, height / 2)
        for (let i = 0; i <= this.numShapes; i++) {
            for (let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.singleStep) {
                rect(x,0,this.shapeSize, this.shapeSize)
            }
            rotate(this.angle)
        }
        pop()
    }
}

class CenteredShape extends Layer {
    constructor() {
        super()
        this.randomShape = random(1)
        this.shapeSize = floor(random(this.stepsOut /2, this.stepsOut)) * this.singleStep
    }

    render() {
        fill(this.layerColor)
        noStroke()
        push()
        translate(width / 2, height / 2)
        if (this.randomShape < 0.1) {
            rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)

        } else if (this.randomShape >= 0.1 && this.randomShape <= 0.6) {
            ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else if (this.randomShape >= 0.6) {
            rotate(this.angle / 2)
            hexagon(0, 0,this.shapeSize)
        }
        pop()
    }
}

class RingOfShapes extends Layer {
    constructor() {
        super()
        this.steps = floor(random(1, this.stepsOut))
        this.center = this.steps * this.singleStep
        this.randomShape = random(1)
        this.direction = 0
        this.fillColor = color(0,1)
        this.weight = this.thickStroke

        if (this.steps < this.stepsOut / 2) {
            this.radius = floor(random(1, this.steps)) * this.singleStep
        } else if (this.steps > this.stepsOut / 2) {
            this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
        } else {
            this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
        }
    }

    render() {
        stroke(this.weight)
        push()
            translate(width / 2, height / 2)
        for (let i = 0; i <= this.numShapes; i++) {
            if (this.randomShape < 0.33) {
                    ellipse(0,this.center, this.radius, this.radius) 
            } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
                rect(0, this.center, this.radius, this.radius) 
            } else if (this.randomShape >= 0.66) {
                myTriangle(this.center, this.radius, this.direction) 
            }
            rotate(this.angle) 
        }
        pop() 
    }
}