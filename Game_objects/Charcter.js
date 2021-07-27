import { context } from "../script.js";
import Ground from "./Ground.js"

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530

var Charcter = {
    color: "green",
    posx: 250,
    posy: 230,
    width: 100,
    height:100,
    horizontalMoviment: 0,
    qtyMove: 2.5,
    verticalVelocity: 0,
    gravity: 1.5,
    jumpForce: 18,
    qtyJump: 0,
    maxJump: 1,
    jump: () => {
        if (Charcter.qtyJump < Charcter.maxJump){

            Charcter.verticalVelocity -= Charcter.jumpForce
            Charcter.qtyJump += 1
        }
    },
    desenha: () => {
        context.fillStyle = Charcter.color
        context.fillRect(Charcter.posx, Charcter.posy, Charcter.width, Charcter.height)
    },
    atualiza: () => {
        Charcter.verticalVelocity += Charcter.gravity
        Charcter.posy += Charcter.verticalVelocity

        if (Charcter.posy > Ground.posy - Charcter.height){
            Charcter.posy = Ground.posy - Charcter.height
            Charcter.verticalVelocity = 0
            Charcter.qtyJump = 0
        }
        

        if (Charcter.posx + Charcter.width >= SCREEN_WIDTH){
            Charcter.posx = (SCREEN_WIDTH - Charcter.width) - 0.5
            Charcter.horizontalMoviment = 0
        }


        else if (Charcter.posx < 0){
            Charcter.posx = 0.5
            Charcter.horizontalMoviment = 0

        }


        Charcter.posx += Charcter.horizontalMoviment
        
        
    }
}

export default Charcter