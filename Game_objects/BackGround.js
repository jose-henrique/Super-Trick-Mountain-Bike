import { context, sprite } from "../script.js"

var BackGround = {
    color: "#96C3EB",
    posx: 0,
    posy: 0,
    width: 950,
    height: 530,
    desenha: () => {
        context.drawImage(
            sprite,
            20, 470,
            BackGround.width, BackGround.height,
            BackGround.posx, BackGround.posy,
            BackGround.width, BackGround.height
        )
    }
}

export default BackGround;