


function setup() {
  
  createCanvas(1600,400);

  
  
    
}

//draw function.
function draw()
 {
    
  
        
       drawSprites();  
 
 }

 
  


  
 

function hasCollided(bullet1, wall1)
{
  
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
      return true;
  }
      return false;
}