const canvas = document.getElementById("CVS");
const ctx = canvas.getContext("2d");

function Update() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let update = setInterval(Update, 24);
