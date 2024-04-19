const canvas = document.getElementById("CVS");
const ctx = canvas.getContext("2d");
let backgroundImg = document.getElementById("map-source");

let mousePressed = false;
let mouseX, mouseY;

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  mouseX = event.clientX - rect.left - 10;
  mouseY = event.clientY - rect.top - 10;
}

class Marker{
  constructor(name, x, y, width, height, color) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  drawMarker()
  {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
  drawText(){
    if(mouseX> this.x && mouseX < this.x + this.width && mouseY> this.y && mouseY < this.y + this.height)
    {
      ctx.globalAlpha = 1;
      ctx.font = "25px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(this.name,mouseX,mouseY);
    }
  }
}

let markers = [
  new Marker("Monolith", 490, 560, 40, 40, "#156e2d")
];

onmousemove = (e) => {
  getCursorPosition(canvas, e);
};

onmousedown = (e) => {
  mousePressed = true;
  markers.forEach(e => {
    if(mouseX> e.x && mouseX < e.x + e.width && mouseY> e.y && mouseY < e.y + e.height)
    {
      let targetElement = document.getElementById(e.name);

      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    }
  });
};

function Update() {

  ctx.drawImage(backgroundImg, 0, 0, 900, 1000);

  markers.forEach(e => {
    e.drawMarker();
    e.drawText();
  });

}

let update = setInterval(Update, 24);