import { context, frames, sprite } from "../script.js";
import Ground from "./Ground.js"
import { arrowLeftPressed, arrowRightPressed, spaceBarPressed } from "../Game_utils/handleKeys.js";
import Colide_Rails from "../Game_utils/Colide_Rails.js";
import Rail from "./Rail.js";

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530


var Enemy = {
    posx: 250,
    posy: 230,
    width: 48,
    height: 63,
    horizontalMoviment: 0,
    qtyMove: 0.5,
    verticalVelocity: 0,
    gravity: 1.5,
    jumpForce: 18,
    life: 80,
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
        if (Enemy.qtyJump < Enemy.maxJump){

            Enemy.verticalVelocity -= Enemy.jumpForce
            Enemy.qtyJump += 1
        }
    },
    move: () => {
        Enemy.posx += Enemy.horizontalMoviment

        var movingRight = true
        var movingLeft = false

        if (movingRight){
            Enemy.horizontalMoviment += Enemy.qtyMove
            Enemy.counterRight = 0
            if (Enemy.posx >= SCREEN_WIDTH - 200){
                movingRight = false
                movingLeft = true
            }
            
        }else {
            
            if (Enemy.counterRight <= 35){
                Enemy.horizontalMoviment = Enemy.horizontalMoviment / 1.2
                Enemy.counterRight += 1
            }
        }

        if (movingLeft){
            Enemy.horizontalMoviment -= Enemy.qtyMove
            Enemy.counterLeft = 0
        }else {
            if (Enemy.counterLeft <= 35){
                Enemy.horizontalMoviment = Enemy.horizontalMoviment / 1.2
                Enemy.counterLeft += 1
            }
        }

        if (spaceBarPressed){
            Enemy.jump()
        }
        console.log(`movendo para direita: ${movingRight}`)
        console.log(`movendo para esquerda ${movingLeft}`)

    
        
    },
    refreshWalkFrame: () => {
        const interval = 4
        const passTheInterval = frames % interval

        if (passTheInterval === 0){
            const incrementBase = 1
            const increment = incrementBase + Enemy.currentFrame
            const RepeatBase = Enemy.walkFrames.length
            Enemy.currentFrame = increment % RepeatBase
        }

    },
    refreshSecondTrickFrame: () => {
        const interval = 4
        const passTheInterval = frames % interval

        if (passTheInterval === 0){
            const incrementBase = 1
            const increment = incrementBase + Enemy.currentFrame
            const RepeatBase = Enemy.SecondTrickFrames.length
            Enemy.currentFrameSecondTrick = increment % RepeatBase
        }
    },
    desenha: () => {
        Enemy.refreshWalkFrame()
        Enemy.refreshSecondTrickFrame()
        const { sourceX } = Enemy.walkFrames[Enemy.currentFrame]
       
        if(Enemy.horizontalMoviment > 1 || Enemy.horizontalMoviment < -1){
            if(Enemy.horizontalMoviment >= 1){
                context.drawImage(
                    sprite,
                    sourceX, 20,
                    Enemy.width, Enemy.height,
                    Enemy.posx, Enemy.posy,
                    Enemy.width, Enemy.height
                )   
            }
            else if (Enemy.horizontalMoviment <= 0){
                context.drawImage(
                    sprite,
                    sourceX, 93,
                    Enemy.width, Enemy.height,
                    Enemy.posx, Enemy.posy,
                    Enemy.width, Enemy.height
                )
            }
        }else {
            context.drawImage(
                sprite,
                20, 166,
                Enemy.width, Enemy.height,
                Enemy.posx, Enemy.posy,
                Enemy.width, Enemy.height
            ) 
        }

    },
    atualiza: () => {
        Enemy.verticalVelocity += Enemy.gravity
        Enemy.posy += Enemy.verticalVelocity

        if (Enemy.posy > Ground.posy - Enemy.height){
            Enemy.posy = Ground.posy - Enemy.height
            Enemy.verticalVelocity = 0
            Enemy.qtyJump = 0
        }
        

        if (Enemy.posx + Enemy.width >= SCREEN_WIDTH){
            Enemy.posx = (SCREEN_WIDTH - Enemy.width) - 0.5
            Enemy.horizontalMoviment = 0
        }


        else if (Enemy.posx < 0){
            Enemy.posx = 0.5
            Enemy.horizontalMoviment = 0

        }

        var collindingRails = Colide_Rails(
            Enemy.posx,
            Enemy.posy,
            Enemy.height,
            Enemy.width
        )

        if (collindingRails == 3){
            Enemy.posy = Rail.posy - Enemy.height
            Enemy.verticalVelocity = 0
            Enemy.qtyJump = 0
        }

        if (collindingRails == 1){
            Enemy.posx = Rail.posx -  Enemy.width - 0.5
            Enemy.horizontalMoviment = 0
        }

        else if(collindingRails == 2) {
            Enemy.posx = Rail.posx + Rail.width + 0.5
            Enemy.horizontalMoviment = 0
        }

        

        
        Enemy.move()
        
    }
}

export default Enemy