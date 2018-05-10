var yspeed=0;
var y=200;
var yaccel=0.5;
var rectCoordsX=[400,400];
var rectCoordsX2=[600,600];
var rectCoordsY=[0,0];
var rectCoordsY2=[0,0];
var speed=-1.3;
var end=false;
var s=0;

function setup() {
  createCanvas(400, 400);
	for( var i = 0; i < 1; i++){
    rectCoordsY[i] = random(0, height - 150);
    rectCoordsY2[i] = random(0, height - 150);
  }
}

function draw() {
  if (end){
    background(0);
    fill(255,0,0);
    text ("Game Over", width/2 - 80, height/2);
    y=200;
    s=0;
    for (var i=0; i<1; i++){
    	rectCoordsX[i]=400;
    	rectCoordsX2[i]=600;
    }
  } else {
  	background(246, 34, 23);
  	createBall();
  	moveBall();
  	makeWalls();
  	moveWalls();
  	checkWalls();
    checkContact();
  	ground();
    checkTB();
    points();

    textSize(32);
  	fill(255);
  	text('Score:',140,50);
  	text(s,240,50);
  }
}

function createBall(){
  fill(22, 234, 245);
  ellipse(140,y,20,20);
}

function moveBall(){
  yspeed=yspeed+yaccel;
  y=y+yspeed;
}

function makeWalls(){
  for(var i=0; i<1; i++){
 		rect(rectCoordsX[i],0,40,rectCoordsY[i]);
  	rect(rectCoordsX[i],rectCoordsY[i] + 100,40,height-rectCoordsY[i]-100);
    rect(rectCoordsX2[i],0,40,rectCoordsY2[i]);
  	rect(rectCoordsX2[i],rectCoordsY2[i] + 100,40,height-rectCoordsY2[i]-100);
  }
}

function moveWalls(){
  for(var i=0; i<1; i++){
    rectCoordsX[i]=rectCoordsX[i]+speed
    rectCoordsX2[i]=rectCoordsX2[i]+speed
  }
}

function checkWalls(){
  for(var i=0; i<1; i++){
    if(rectCoordsX[i] <= 0){
      rectCoordsX[i]=400;
      rectCoordsY[i]=random(0, height - 150);
    }
    if(rectCoordsX2[i] <= 0){
      rectCoordsX2[i]=400;
      rectCoordsY2[i]=random(0, height - 150);
    }
  }
}

function checkContact(){
  for(var i=0; i<1; i++){
    if(rectCoordsX[i]<140 && rectCoordsX[i]+40>140){
    	if(y>rectCoordsY[i] && y<rectCoordsY[i]+100){
        //live
      } else{
        end=true;
      }
  	}
    if(rectCoordsX2[i]<140 && rectCoordsX2[i]+40>140){
    	if(y>rectCoordsY2[i] && y<rectCoordsY2[i]+100){
        //live
      } else{
        end=true;
      }
  	}
  }
}

function points(){
  for(var i=0; i<1; i++){
    if(rectCoordsX[i]+39.5<140 && rectCoordsX[i]+41>140){
    	s=s+1;
    }
    if(rectCoordsX2[i]+39.5<140 && rectCoordsX2[i]+41>140){
    	s=s+1;
    }
  }
}

function ground(){
  //ground
  fill(0,255,0);
  rect(0,height-20,width,20);
}

function checkTB(){
  //top
  if(y<0){
  	y=0;
  }
  //bottom
  if(y>380){
    end=true;
  }
}

function mousePressed(){
	yspeed=-8;
  	end=false;
	return(false);
}
