class Game {
    constructor(){
  
    }
  
    getState(){
      var gameRef  = database.ref('gameState');
      gameRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
           form = new Form()
           form.display();
      }
      rober=createSprite(100,200);
      rober.scale=1;
      rober.addAnimation("rober",rober1);

      cop=createSprite(400,200);
      cop.scale=1.5;
      cop.addAnimation("cop",cop1);

      players=[rober,cop];
    }

    play(){
       
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        console.log("play working");

        image(track1, displayWidth/2,-displayHeight*4,displayWidth, displayHeight*5);
        
        var index=0;
        var x = 200;
        var y ;   
      }

      for(var plr in allPlayers){
        index=index+1
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        players[index -1].x = x;
        players[index - 1].y = y;
      }

      if (index === player.index){
        stroke(10);
        fill("blue");
        ellipse(x,y,80,80);
        players[index - 1].shapeColor = "blue";
        camera.position.x = displayWidth/2;
        camera.position.y = players[index-1].y;
      }

      if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance += 10
        player.update();
    }
    if (keyIsDown(DOWN_ARROW) && player.index !== null) {
        player.distance -= 10
        player.update();
    }

    if (frameCount % 100 === 0) {
      stone = createSprite(random(100,1000),0,100,100);
      stone.velocityX = -6;
      var rand = Math.round(random(1,3));
      switch(rand){
          case 1: stone.addImage("stone1",stone4);
          break;
          case 2: stone.addImage("stone1",stone5);
          break;
          case 3: stone.addImage("stone1",stone6);
          break;
      }
          stone.scale=0.1;
          stoneGroup.add(stone);
    }

    if(player.distance > 5000){
      gameState = 2;
    }
      drawSprites();
    }
    end(){
      console.log("Game Ended");
    } 
}