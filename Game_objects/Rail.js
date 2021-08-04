import { context } from "../script.js";

var Rail = {
    color: "green",
    posx: 325,
    posy: 410,
    width: 300,
    height: 20,
    desenha: () => {
        context.fillStyle = Rail.color
        context.fillRect(Rail.posx, Rail.posy, Rail.width, Rail.height)
    }
}

export default Rail;