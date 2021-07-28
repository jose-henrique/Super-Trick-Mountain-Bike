import { context } from "../script.js";
import { firstTrick, secondTrick, thirdTrick } from "../Game_utils/Combo_Stucture.js";

function Combo_Handler(){
    firstTrick()
    secondTrick()
    thirdTrick()
}


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
            context.fillStyle = "#fff"
            context.font = "36px Arial"
            context.fillText("Duplo twist carpado reverso", 200, 68) 
        }

        if(Combo_Object.toDraw == "second"){
            context.fillStyle = "#fff"
            context.font = "36px Arial"
            context.fillText("Cateto adjacente complexo", 200, 68) 
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