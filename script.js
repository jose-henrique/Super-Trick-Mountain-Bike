import BackGround  from "./Game_objects/BackGround.js";
import Charcter  from "./Game_objects/Charcter.js";
import Ground from "./Game_objects/Ground.js";
import { handleKeyDown, handleKeyUP } from "./Game_utils/handleKeys.js";
import Combo_Handler, { Combo_Object } from "./Game_objects/Combo_Handler.js";
import Rail from "./Game_objects/Rail.js";
import Enemy from "./Game_objects/Enemy.js";


const canvas = document.getElementById("Game")
export const context = canvas.getContext("2d")

const sprite = new Image();
sprite.src = "./Sprites/Sprite_sheet.png";

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530

var frames = 0;

function atualiza(){
    frames ++

    if (frames > 2000){
        frames = 0
    }
    Charcter.atualiza()
    Enemy.atualiza()
    Combo_Object.refresh()
    
    Combo_Handler()

}

function desenha(){
    BackGround.desenha()

    Ground.desenha()

    Rail.desenha()

    Charcter.desenha()
    Enemy.desenha()
    
    if (Combo_Object.is_draw){
        Combo_Object.draw()
    }
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

export {frames, sprite}

main()