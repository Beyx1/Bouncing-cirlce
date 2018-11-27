//Declares variable
var ar, ag, ab
var er, eg, eb
var dir = 1;
var r, g, b;
var xText = 150;
var yText = 0;
var diam1 = 10;
var xPos = 0;
function setup() {
  createCanvas(500,500);//sets size of the canvas
    r = random(255);//assigns a value of a random number between 0 and 255 to r
    g = random(255);
    b = random(255);
    diam1 = 10;
    dir = 1;
     er = random(255);//assigns a value of a random number between 0 and 255 to r
    eg = random(255);
    eb = random(255);
}

function draw() {
background(r, g, b);// states background colour
//code for cirlce  
fill(er, eg, eb);    
stroke('#aa56ff');
strokeWeight(2);
ellipse(xPos,250,diam1,diam1);
diam1= diam1 + -5*dir;
xPos = xPos + 5*dir;
if(diam1 > width){
    dir = 5;
} else 
    
    if (diam1 < 10){
    		dir = 10;
}
    
if(xPos > width){
    xPos = xPos  + 5*dir;
    dir = -10;
}    
//code for text
strokeWeight(0)
fill(ar, ag, ab);    
text('Barney',xText,yText);
yText = yText + 1;
if(yText > 500){
    yText = 0;
}    
textSize(50)
textFont('Georgia');
textStyle(ITALIC);    
textAlign(CENTER);    
}

function keyPressed(){
    er = random(255);//when key is pressed r is assigned new random value
    eg = random(255);
    eb = random(255);

    if(keyCode === DOWN_ARROW){// tests the value of key that is pressed
    
     console.log(r,g,b);
    r = random(175);//when key is pressed r is assigned new random value
    g = random(50);
    b = random(200);
    }
    if(keyCode === LEFT_ARROW){// tests the value of key that is pressed
    r = random(255);//assigns a value of a random number between 0 and 255 to r
    g = random(255);
    b = random(255);
    }
        

    if(keyCode === RIGHT_ARROW){// tests the value of key that is pressed 
            ar = random(255);//when key is pressed r is assigned new random value
    ag = random(255);
    ab = random(255);
    }        
    

}   

