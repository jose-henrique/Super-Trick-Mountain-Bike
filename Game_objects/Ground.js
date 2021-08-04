import { context, sprite } from "../script.js";

var Ground = {
    color: "#CCAC93",
    posx: 0,
    posy: 430,
    width: 950,
    height: 100,
    desenha: () => {
        context.drawImage(
            sprite,
            18, 900,
            Ground.width, Ground.height,
            Ground.posx, Ground.posy,
            Ground.width, Ground.height
        )
    }
}

export default Ground;