  function paint() {
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var matrix = ["ROB IS COOL", 'ROB', 'IS', 'COOL',];
var color = "#0F0";
var colormatrix = ["#0F0", '#44146F', "#4C4CFF"]; 
// var rave = colormatrix[Math.floor(Math.random()*colormatrix.length)]
// colormatrix[Math.floor(Math.random()*colormatrix.length)]

var font_size = 14;
var columns = c.width / font_size; 
var drops = [];
for (var x = 0; x < columns; x++)
  drops[x] = 1; 
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = color;
  ctx.font = font_size + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random()*matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 100);
};

  function newctx() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
  };

  // function clear() {
  //   var c = document.getElementById("c");
  //   var ctx = c.getContext("2d");
  //   c.height = window.innerHeight;
  //   c.width = window.innerWidth;
  //   clearInterval(draw);
  //   ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
  // };