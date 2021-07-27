import BackGround  from "./Game_objects/BackGround.js";
import Charcter  from "./Game_objects/Charcter.js";
import Ground from "./Game_objects/Ground.js";

const canvas = document.getElementById("Game")
export const context = canvas.getContext("2d")

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530


function atualiza(){

    Charcter.atualiza()

}

function desenha(){
    BackGround.desenha()

    Ground.desenha()

    Charcter.desenha()
}

function loop(){
    atualiza()
    desenha()

    requestAnimationFrame(loop)

}

function handleKeyDown(event){

    const KeyDown = event.key
    const code = event.keyCode

    if (KeyDown == "ArrowRight"){
        Charcter.horizontalMoviment += Charcter.qtyMove;
    }
    else if (KeyDown == "ArrowLeft"){
        Charcter.horizontalMoviment -= Charcter.qtyMove;
    };
    if (code == 32){
        Charcter.jump()
    }

}

function handleKeyUP(event){

    const KeyUp = event.key

    if (KeyUp == "ArrowRight"){
        Charcter.horizontalMoviment = 0
    }
    else if (KeyUp == "ArrowLeft"){
        Charcter.horizontalMoviment = 0
    };

}

function main(){
    loop()

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUP)

}



main()