function move(speed){

    if(keyDown("W")){
        personagem.position.y = personagem.position.y -speed;
        personagem.changeAnimation("")
    }
    else if(keyDown("A")){
        personagem.position.x = personagem.position.x -speed;
        personagem.changeAnimation("andandoL");
        position = "left";
    }
    else if(keyDown("S")){
        personagem.position.y = personagem.position.y +speed;
        personagem.changeAnimation("caindo")
    }
    else if(keyDown("D")){
        personagem.position.x = personagem.position.x +speed;
        personagem.changeAnimation("andandoR");
        position = "right";
    }

    else if(position == "left"){
        personagem.changeAnimation("paradoL");
    }
    else if(position == "right"){
        personagem.changeAnimation("paradoR");
    }
}