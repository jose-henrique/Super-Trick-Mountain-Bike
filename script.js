import BackGround  from "./Game_objects/BackGround.js";
import Charcter  from "./Game_objects/Charcter.js";
import Ground from "./Game_objects/Ground.js";
import { handleKeyDown, handleKeyUP } from "./Game_utils/handleKeys.js"

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

function main(){
    loop()

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUP)

}

main()