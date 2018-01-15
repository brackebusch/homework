document.addEventListener("DOMContentLoaded", function() {

    var canvas = document.getElementById("myCanvas");
    canvas.width = 500;
    canvas.height = 500;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(300, 150, 25, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.fillRect(300, 300, 75, 90)
});