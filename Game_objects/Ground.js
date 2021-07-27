import { context } from "../script.js";

var Ground = {
    color: "#CCAC93",
    posx: 0,
    posy: 430,
    width: 950,
    height: 100,
    desenha: () => {
        context.fillStyle = Ground.color
        context.fillRect(Ground.posx, Ground.posy, Ground.width, Ground.height)
    }
}

export default Ground;