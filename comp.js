function comAction(){
    var action = ["rock","scissors","paper"];
    var rand = action[Math.floor(Math.random()*action.length)];
    return(rand);
}