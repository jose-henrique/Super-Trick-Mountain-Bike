import Rail from "../Game_objects/Rail.js";

export default function Colide_Rails(objX, objY, objHeight, objWidth){
    if (objX + objWidth >= Rail.posx && objX <= Rail.posx + Rail.width && objY >= Rail.posy - objHeight - 1 && objY + objHeight <= Rail.posy + (Rail.height / 2) ){
        return 3
    }

    if(objX + objWidth >= Rail.posx && objX + objWidth <= Rail.posx + Rail.width && objY + objHeight >= Rail.posy){
        return 1
    }

    if(objX + objWidth >= Rail.posx && objX <= Rail.posx + Rail.width && objY + objHeight >= Rail.posy){
        return 2
    }


}