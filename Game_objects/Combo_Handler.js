import { context } from "../script.js";
import { firstTrick, secondTrick, thirdTrick } from "../Game_utils/Combo_Stucture.js";

function Combo_Handler(){
    firstTrick()
    secondTrick()
    thirdTrick()
}

const Sprites = new Image();
Sprites.src = "../Sprites/words.png";


var Combo_Object = {
    is_draw: false,
    toDraw: null,
    refresh: () => {

        var firstTrickStore = firstTrick()
        var secondTrickStore = secondTrick()
        var thirdTrickStore = thirdTrick()
        
        if (firstTrickStore){
            Combo_Object.is_draw = true
            Combo_Object.toDraw = "first"
            setTimeout(() => {Combo_Object.is_draw = false},[500])
        }

        if (secondTrickStore){
            Combo_Object.is_draw = true
            Combo_Object.toDraw = "second"
            setTimeout(() => {Combo_Object.is_draw = false},[500])
        }

        if(thirdTrickStore){
            Combo_Object.is_draw = true
            Combo_Object.toDraw = "third"
            setTimeout(() => {Combo_Object.is_draw = false},[500])
        }

    },
    draw: () => {
        if(Combo_Object.toDraw == "first"){
            context.drawImage(
                Sprites,
                20, 20,
                332, 127,
                200, 68,
                332, 127
            )
        }

        if(Combo_Object.toDraw == "second"){
            context.drawImage(
                Sprites,
                416, 20,
                299, 126,
                200, 68,
                299, 126
            )
        }

        if(Combo_Object.toDraw == "third"){
            context.fillStyle = "#fff"
            context.font = "36px Arial"
            context.fillText("Subida pra baixo", 200, 68) 
        }
    }

}

export default Combo_Handler
export {Combo_Object}