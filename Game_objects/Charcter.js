import { context, frames, sprite } from "../script.js";
import Ground from "./Ground.js"
import { arrowLeftPressed, arrowRightPressed, spaceBarPressed } from "../Game_utils/handleKeys.js";
// import { firstTrick, secondTrick, thirdTrick } from "../Game_utils/Combo_Stucture.js";
import Colide_Rails from "../Game_utils/Colide_Rails.js";
import Rail from "./Rail.js";

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530


var Charcter = {
    color: "green",
    posx: 250,
    posy: 230,
    width: 48,
    height: 63,
    horizontalMoviment: 0,
    qtyMove: 0.5,
    verticalVelocity: 0,
    gravity: 1.5,
    jumpForce: 18,
    life: 200,
    qtyJump: 0,
    maxJump: 1,
    counterRight: 0,
    counterLeft: 0,
    currentFrame: 0,
    currentFrameSecondTrick: 0,
    walkFrames: [
        {sourceX: 20},
        {sourceX: 78},
        {sourceX: 136},
        {sourceX: 136},
        {sourceX: 78},
        {sourceX: 20}
    ],
    SecondTrickFrames:[
        {SourceX1st:224, width1st: 48},
        {SourceX1st:272, width1st: 48},
        {SourceX1st:340, width1st: 48},
        {SourceX1st:398, width1st: 48},
        {SourceX1st:456, width1st: 54},
        {SourceX1st:521, width1st: 69},
        {SourceX1st:600, width1st: 75},
        {SourceX1st:600, width1st: 75},
        {SourceX1st:521, width1st: 69},
        {SourceX1st:456, width1st: 54},
        {SourceX1st:398, width1st: 48},
        {SourceX1st:340, width1st: 48},
        {SourceX1st:272, width1st: 48},
        {SourceX1st:224, width1st: 48},
    ],
    jump: () => {
        if (Charcter.qtyJump < Charcter.maxJump){

            Charcter.verticalVelocity -= Charcter.jumpForce
            Charcter.qtyJump += 1
        }
    },
    move: () => {
        Charcter.posx += Charcter.horizontalMoviment

        if (arrowRightPressed){
            Charcter.horizontalMoviment += Charcter.qtyMove
            Charcter.counterRight = 0
            
        }else {
            
            if (Charcter.counterRight <= 35){
                Charcter.horizontalMoviment = Charcter.horizontalMoviment / 1.2
                Charcter.counterRight += 1
            }
        }

        if (arrowLeftPressed){
            Charcter.horizontalMoviment -= Charcter.qtyMove
            Charcter.counterLeft = 0
        }else {
            if (Charcter.counterLeft <= 35){
                Charcter.horizontalMoviment = Charcter.horizontalMoviment / 1.2
                Charcter.counterLeft += 1
            }
        }

        if (spaceBarPressed){
            Charcter.jump()
        }

    
        
    },
    refreshWalkFrame: () => {
        const interval = 4
        const passTheInterval = frames % interval

        if (passTheInterval === 0){
            const incrementBase = 1
            const increment = incrementBase + Charcter.currentFrame
            const RepeatBase = Charcter.walkFrames.length
            Charcter.currentFrame = increment % RepeatBase
        }

    },
    refreshSecondTrickFrame: () => {
        const interval = 4
        const passTheInterval = frames % interval

        if (passTheInterval === 0){
            const incrementBase = 1
            const increment = incrementBase + Charcter.currentFrame
            const RepeatBase = Charcter.SecondTrickFrames.length
            Charcter.currentFrameSecondTrick = increment % RepeatBase
        }
    },
    desenha: () => {
        Charcter.refreshWalkFrame()
        Charcter.refreshSecondTrickFrame()
        const { sourceX } = Charcter.walkFrames[Charcter.currentFrame]
       
        if(Charcter.horizontalMoviment > 1 || Charcter.horizontalMoviment < -1){
            if(Charcter.horizontalMoviment >= 1){
                context.drawImage(
                    sprite,
                    sourceX, 20,
                    Charcter.width, Charcter.height,
                    Charcter.posx, Charcter.posy,
                    Charcter.width, Charcter.height
                )   
            }
            else if (Charcter.horizontalMoviment <= 0){
                context.drawImage(
                    sprite,
                    sourceX, 93,
                    Charcter.width, Charcter.height,
                    Charcter.posx, Charcter.posy,
                    Charcter.width, Charcter.height
                )
            }
        }else {
            context.drawImage(
                sprite,
                20, 166,
                Charcter.width, Charcter.height,
                Charcter.posx, Charcter.posy,
                Charcter.width, Charcter.height
            ) 
        }

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

        var collindingRails = Colide_Rails(
            Charcter.posx,
            Charcter.posy,
            Charcter.height,
            Charcter.width
        )

        if (collindingRails == 3){
            Charcter.posy = Rail.posy - Charcter.height
            Charcter.verticalVelocity = 0
            Charcter.qtyJump = 0
        }

        if (collindingRails == 1){
            Charcter.posx = Rail.posx -  Charcter.width - 0.5
            Charcter.horizontalMoviment = 0
        }

        else if(collindingRails == 2) {
            Charcter.posx = Rail.posx + Rail.width + 0.5
            Charcter.horizontalMoviment = 0
        }

        

        
        Charcter.move()
        
    }
}

export default Charcter