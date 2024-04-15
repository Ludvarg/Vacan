const canvas = document.getElementById("CVS");
const ctx = canvas.getContext("2d");
let backgroundImg = document.getElementById("map-source");

function Update() {
  ctx.drawImage(backgroundImg, 0, 0, 900, 1000);

  ctx.globalAlpha = 0.5
  ctx.fillStyle = "#156e2d";
  ctx.fillRect(550, 550, 50, 50);
}

let update = setInterval(Update, 24);