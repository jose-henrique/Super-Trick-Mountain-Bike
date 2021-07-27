import { context } from "../script.js"

var BackGround = {
    color: "#96C3EB",
    posx: 0,
    posy: 0,
    width: 950,
    height: 530,
    desenha: () => {
        context.fillStyle = BackGround.color
        context.fillRect(BackGround.posx, BackGround.posy, BackGround.width, BackGround.height)
    }
}

export default BackGround;