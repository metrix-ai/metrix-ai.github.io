const matrix = document.getElementById('matrix');
const ctx = matrix.getContext('2d');

const config = {
  amount: 60,
  speed: 100,
  size: 14,
  minLength: 5,
  maxLength: 15,
  rowColor: "#7C7C7C",
  textApperanceSpeed: .8,
  textTopOffset: 5,
  textLeftOffset: 15,
  firstColor: '#eeeeee',
  color: '#7C7C7C'
};


let dataarray = [];
let width = (ctx.canvas.width = window.innerWidth);
let height = (ctx.canvas.height = window.innerHeight);

class Data {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.history = [];
    this.historySizeMax = Math.floor(Math.random() * config.maxLength + config.minLength)
  }

  update(w, h) {
    this.y += config.size;
    if (this.y >= h + this.historySizeMax * config.size) {
      dataarray.splice(dataarray.indexOf(this), 1)
      putData(w, h);
    }

    this.history.unshift(
      String.fromCharCode(60 + Math.floor(Math.random() * 62)),
    );

    if (this.history.length > this.historySizeMax) {
      this.history.pop();
    }
  }

  draw() {
    if (Math.random() > 0.995) return;

    ctx.fillStyle = config.firstColor;
    ctx.fillText(this.history[0], this.x, this.y);

    ctx.fillStyle = config.color;
    for (var i = 1, char; (char = this.history[i]); i++) {
      ctx.fillText(char, this.x, this.y - i * config.size);
    }
  }
}

function putData(w, h) {
  var count = Math.floor(w / config.size);
  const newX = Math.floor(Math.random() * count) * config.size;

  for (let i = 0; i < dataarray.length; i++) {
    const row = dataarray[i];

    if (typeof row === 'undefined') {
      return;
    }

    if (
      row.x === newX &&
      row.y - row.historySizeMax * config.size + config.size < config.size
    ) {
      return;
    }
  }

  dataarray.push(new Data(newX));
}

/*
Init & loop
=============
*/
function initCtx(){
  ctx.font = config.size + 'px monospace';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = config.color;
}

let interval;
initCtx();

function animate(w, h) {
  initCtx();
  return setInterval(function() {
    ctx.clearRect(0, 0, w, h);

    if (dataarray.length < config.amount) {
      putData(w, h);
    }

    for (let i = 0; i < dataarray.length; i++) {
      dataarray[i].update(w, h);
      dataarray[i].draw();
    }
  }, config.speed);
}

interval = animate(width, height);

function resizeCallback() {
  clearInterval(interval);
  dataarray = [];
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  interval = animate(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize',resizeCallback);
