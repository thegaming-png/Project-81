canvas = document.getElementById("MyCanvas");

ctx = canvas.getContext("2d");


var color = "red";



canvas.addEventListener("mousedown", MyFunction)

function MyFunction(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    // console.log(mouse_x)
    // console.log(mouse_y)

    Circle(mouse_x, mouse_y)

};






function Circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillArc = "red"
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    // ctx.fill(255, 0, 0)
}