import BackGround  from "./Game_objects/BackGround.js";
import Charcter  from "./Game_objects/Charcter.js";
import Ground from "./Game_objects/Ground.js";
import { handleKeyDown, handleKeyUP } from "./Game_utils/handleKeys.js"


const canvas = document.getElementById("Game")
export const context = canvas.getContext("2d")

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530

var frames = 0;

function atualiza(){
    frames ++

    if (frames > 2000){
        frames = 0
    }
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

function main(){
    loop()

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUP)

}

export {frames}

main()