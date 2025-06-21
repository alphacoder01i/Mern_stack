var start = new Date().getTime();
function RandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color = color+letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

   function change() {
    var left;
    var right;
    var top;
    var bottom;
    var wh;
    left = Math.floor(Math.random() * 300);
    right = Math.floor(Math.random() * 300);
    top = Math.floor(Math.random() * 300);
    bottom = Math.floor(Math.random() * 300);
    wh = Math.floor(Math.random() * 300) + 100;
    document.getElementById("square").style.left = left + "px";
    document.getElementById("square").style.right = right + "px";
    document.getElementById("square").style.top = top + "px";
    document.getElementById("square").style.bottom = bottom + "px";
    document.getElementById("square").style.width = wh + "px";
    document.getElementById("square").style.height = wh + "px";
    document.getElementById("square").style.display = "block";
    document.getElementById("square").style.backgroundColor = RandomColor();
    start = new Date().getTime();
                        }
 document.getElementById("square").onclick = function () {
document.getElementById("square").style.display = "none";
var end = new Date().getTime();
var time = (end - start) / 1000;
alert("Your reaction time is " + time + " seconds");
change();
}