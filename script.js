const canvas = document.getElementById("Game")
const context = canvas.getContext("2d")

const SCREEN_WIDTH = 950
const SCREEN_HEIGHT = 530


var axisX = 250

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

var Charcter = {
    color: "green",
    posx: 250,
    posy: 230,
    width: 100,
    height:100,
    horizontalMoviment: 0,
    qtyMove: 2.5,
    desenha: () => {
        context.fillStyle = Charcter.color
        context.fillRect(Charcter.posx, Charcter.posy, Charcter.width, Charcter.height)
    },
    atualiza: () => {
        
        if (Charcter.posx + Charcter.width >= SCREEN_WIDTH){
            Charcter.posx = (SCREEN_WIDTH - Charcter.width) - 0.5
            Charcter.horizontalMoviment = 0
        }

        else if (Charcter.posx < 0){
            Charcter.posx = 0.5
            Charcter.horizontalMoviment = 0

        }

        Charcter.posx += Charcter.horizontalMoviment
        
    }
}

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
function atualiza(){

    Charcter.atualiza()

}

function desenha(){
    BackGround.desenha()

    Ground.desenha()

    Charcter.desenha()
}

function loop(){
    atualiza()
    desenha()

    requestAnimationFrame(loop)

}

function handleKeyDown(event){

    const KeyDown = event.key

    if (KeyDown == "ArrowRight"){
        Charcter.horizontalMoviment += Charcter.qtyMove;
    }
    else if (KeyDown == "ArrowLeft"){
        Charcter.horizontalMoviment -= Charcter.qtyMove;
    };

}

function handleKeyUP(event){

    const KeyUp = event.key

    if (KeyUp == "ArrowRight"){
        Charcter.horizontalMoviment = 0
    }
    else if (KeyUp == "ArrowLeft"){
        Charcter.horizontalMoviment = 0
    };

}

function main(){
    loop()

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUP)

}



main()