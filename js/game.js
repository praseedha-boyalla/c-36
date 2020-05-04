class Game{
constructor(){

}
getState(){
    var gameStateref = database.ref('gameState');
    gameStateref.on("value",function(data){
gameState = data.val();
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if (gameState===0){
        player = new Player ();
        player.getCount();
        form=new Form ();
        form.display();
        
    }
}
play(){
    form.hide();
    text("game Start",120,100);
    Player.getplayerinfo();
    if( allPlayer!==undefined){
        var displayposition = 150;
for (var plr in allPlayers){
if (plr==="player"+player.index){
    fill("red");

}
else{
    fill(0);

}
        displayposition+20;
        text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition);
    }
}

if(keyIsDown( UP_ARROW )&& player.index!==null ) {
    player.distance+=50;
    player.update();

}
}
]