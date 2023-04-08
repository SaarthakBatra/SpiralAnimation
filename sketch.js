var t = 130, c = 0.05;
function setup() {
    createCanvas(800, 800);
    background(50);
  }
  
  function draw() {
    var a = 1.5, b = 0.025, x = (a*Math.exp(b*t)*Math.cos(t) + 400), y = (a*Math.exp(b*t)*Math.sin(t)) + 400;
    if(frameCount % 1 == 0){ // % 30 is the remainder of num / 30, so 4 % 3 = 1, since 3 / 3 = 0 And 4 / 3 = 3.33   
      if(c > 0){
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);          // these are just preset colors in p5.js AND css lime == rgb(0,255,0) 
        noStroke();
      } else {
        fill(255);
        stroke(0);
      }
      t += c;
      console.log(t,x,y);
    }
    
    ellipseMode(CENTER);
    ellipse(x, y, 80, 80);
    if(t > 240) c *= -1;
    if(t < 120) c *= -1;
  }