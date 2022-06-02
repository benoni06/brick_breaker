let player_life=0;
let ball_x,ball_y;
let paddle_width,paddel_height,paddle_x,paddle_y,paddle_dx;
function setup() {
  createCanvas(600, 600);
  background("black");
  fill("white");
  stroke("red");
  ball_x=width/2;
  ball_y=height/2
  ball_dx=2;
  ball_dy=-4;
  ball_radius=30;
  paddle_width=70;
  paddle_height=20;
  paddle_x=(width/2)-(paddle_width/2);
  paddle_y=height-20;
  }
function draw()
{
 
  background("black");
  circle(ball_x,ball_y,ball_radius)
  rect(paddle_x, paddle_y,paddle_width,paddle_height)
  ball_x=ball_x+ball_dx;
  ball_y=ball_y+ball_dy;
  text("Lives : 3",width-70,30);
   for (let i = 1; i < 7; i++){
      for (let j = 1; j < 7; j++){
        rect(i*70+50, j*50+50, 60, 20)
      }
    }
  
  if(ball_x+(ball_radius/2) >=width || ball_x<0){
   
      ball_dx=-ball_dx;
    }
  
  if(ball_y<0+(ball_radius/2)){
      ball_dy=-ball_dy;
    }
  if(ball_y>height-ball_radius/2){
      ball_dx=0;
      ball_dy=0;
    }
  // console.log("keyIsDown(LEFT_ARROW)", keyIsDown(LEFT_ARROW));
  if (keyIsDown(LEFT_ARROW)&&paddle_x>0){
    paddle_x = paddle_x - 3;
  }
  if (keyIsDown(RIGHT_ARROW)&&paddle_x+paddle_width<600){
    paddle_x = paddle_x + 3;
}
  
  if(ball_y+ball_radius/2>paddle_y){
    if(ball_x+ball_radius/2>paddle_x && ball_x+ball_radius/2< paddle_x+paddle_width){
      ball_dy =- ball_dy;
    }
  }
  
}