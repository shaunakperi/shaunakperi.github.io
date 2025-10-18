function setup() {
    
    createCanvas(710, 400);
  
   
    background(0);
  
    
    strokeWeight(10);
  
    
    colorMode(HSB);
  
    
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }