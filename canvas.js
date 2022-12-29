MAX_CIRCLES = 128;
BRIGHTNESS = 2;
VEL_X = 1;
VEL_Y = 1;
SPEED = 1;
COLOR_CHANGE = 4;

let drops = [];
let canvas, context;

function init() {
  canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  context = canvas.getContext('2d');
  context.fillRect(0, 0, innerWidth, innerHeight);

  setInterval(draw, 0);
  spawnCircles();
}

function spawnCircles() {
  newCircle();
  setTimeout(spawnCircles, Math.random() * 1000);
}

function newCircle() {
  drops.push(new drop(Math.random() * innerWidth, Math.random() * innerHeight, 0));
  // drops.push(new drop(0.5 * innerWidth, 0.5 * innerHeight, 0));

  // sound = getRandomCircleSound();
  // sound.play();

  if (drops.length > MAX_CIRCLES) drops.shift();
}

function draw() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    // drops[i].log();
    drops[i].draw();
    drops[i].grow();
    // drops[i].move();
    // drops[i].turn();
    drops[i].changeColor();
  }
}

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

class drop {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.r = Math.floor(Math.random() * 256 * BRIGHTNESS);
    this.g = Math.floor(Math.random() * 256 * BRIGHTNESS);
    this.b = Math.floor(Math.random() * 256 * BRIGHTNESS);
    this.a = 1;
    this.velX = (Math.random() - 0.5) * VEL_X;
    this.velY = (Math.random() - 0.5) * VEL_Y;
  }

  grow() {
    this.rad += SPEED;
    this.a -= 0.001;
  }

  log() {
    console.log(this.x);
    console.log(this.y);
    console.log(this.rad);
  }

  draw() {
    context.strokeStyle = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
    context.lineWidth = Math.random() * 0.5;
    context.beginPath();
    context.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
    context.stroke();
  }

  move() {
    this.x += this.velX;
    this.y += this.velY;
  }

  turn() {
    this.velX += (Math.random() - 0.5) * 0.1;
    this.velY += (Math.random() - 0.5) * 0.1;
  }

  changeColor() {
    this.r -= (Math.random() * 0.5) * COLOR_CHANGE;
    this.g -= (Math.random() * 0.5) * COLOR_CHANGE;
    this.b -= (Math.random() * 0.5) * COLOR_CHANGE;
  }
}

function getRandomCircleSound() {
  return new Audio('sound/circle' + Math.floor(Math.random() * 8) + '.wav');
}
