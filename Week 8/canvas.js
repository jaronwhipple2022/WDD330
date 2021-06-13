//Before we can draw onto a canvas, we need to grab hold of the canvas element on our page:
var canvas = document.getElementById("myCanvas");

//We obtain our drawing context by calling the getContext method and passing it the string "2d" , 
//since we’ll be drawing in two dimensions:
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Let’s start by using a color string to style the stroke
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";

//To draw a rectangle with a red border and blue fill, we must also define the fill color:
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";

//Let’s change our blue fill to blue with a 50% opacity:
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

//draw a rectangle
var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

//this would create a function to 
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);             
    };            
}


//draw a gradient
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100);  
}


//draw a circle
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

//save a drawing function
function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

//add code to call function on button click
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);


//add event listener to make sure page is loaded
window.addEventListener("load", drawImageToCanvas, false);

//Next, after grabbing the canvas element and setting up the canvas’s context, we can grab an image from our page via document.getElementById :
function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}

//