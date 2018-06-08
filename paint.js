var context = document.getElementById("main").getContext("2d"); //2d means 2 dimensional picture

context.strokeStyle = "#FF4589"; //strokeStyle:this allows you to change color of line

//context.lineWidth = 7;
  //lineWidth:width of drawing line  , change width of line
  document.getElementById("slider").addEventListener("click", function(){
  	var size = this.value; //give you size of slider
  	context.lineWidth = this.value;
});


document.getElementById("new").addEventListener("click", function(){
context.clearRect(0,0,mainCanvas.width,mainCanvas.height); //clearRect : it clears entire canvas.
});

document.getElementById("eraseBtn").addEventListener("click", function(){
context.strokeStyle="#ffffff";
});

document.getElementById("blueBtn").addEventListener("click", function(){
context.strokeStyle = "#0000FF";
});

document.getElementById("redBtn").addEventListener("click", function(){
context.strokeStyle="#FF0000";
});

document.getElementById("pinkBtn").addEventListener("click", function(){
context.strokeStyle="#c617af";
});
document.getElementById("greenBtn").addEventListener("click", function(){
context.strokeStyle="#46ed04";
});
document.getElementById("newBtn").addEventListener("click", function(){
context.strokeStyle="#00ccff";
});
document.getElementById("brownBtn").addEventListener("click", function(){
context.strokeStyle="#663300";
});

//commands for drawing the rectangle :serch for https://www.w3schools.com/tags/canvas_rect.asp and you will get ranctagle in your canvas screen

// context.rect(20,20,150,100); //(changing x position, changing y position, width of rectangle, height of rectangle)
// context.stroke();// stroke: show the rectangle

//commands for drawing the line : https://www.w3schools.com/tags/canvas_lineto.asp
 
 // context.beginPath(); 
 // context.moveTo(0,0); //starting point of line
 // context.lineTo(300,150);  //ending point of line
 // context.stroke(); //stroke: show the rectangle

 //DETECT DRAGGIND AND CLICKING OF YOUR MOUSE

 //CANVAS VARIABLE
 var mainCanvas = document.getElementById("main");
//mainCanvas is the box
 //mainCanvas:addEventListener(__name of the thing you are gonna figuring out (clicking or dragging)__, ____creating function______)
 
var isClicking = true;

var startDrawing = false;
// WHAT IS CLICK?
// 1.DOWN
// 2.UP

// WHAT IS DRAG?
// 1.DOWN 
// 2.move
// 3.UP

 mainCanvas:addEventListener("mousedown",function(event){

		isClicking=true;
		startDrawing = true;
		
 });

 mainCanvas:addEventListener("mousemove",function(event){
//pageX is giving pointer position in web so we need tp change it to canvas size
 	isClicking=false;

if (startDrawing ==1) {
	var x = event.pageX - mainCanvas.offsetLeft;
	var y = event.pageY - mainCanvas.offsetTop;

	context.lineTo(x,y);
	context.closePath();
	context.stroke();
	context.moveTo(x,y);
}
 });

 mainCanvas:addEventListener("mouseup",function(event){
		startDrawing = false;
if (isClicking == true) {
	console.log("person is clicking!!");
	context.fillRect(event.pageX - mainCanvas.offsetLeft,event.pageY- mainCanvas.offsetTop,10,10);
	// fillRect : to fill the square.  https://www.w3schools.com/tags/canvas_fillrect.asp
	 //event.X and event.Y : where is the position of square in canvas.
	context.stroke();
}
else{
	console.log("person is dragging!!");
	context.beginPath(); //
}
 	
 });