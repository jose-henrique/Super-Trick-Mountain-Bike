var arrowRightPressed = false;
var arrowLeftPressed = false;
var spaceBarPressed = false;

function handleKeyDown(event){

    const KeyDown = event.key
    const code = event.keyCode

    if (KeyDown == "ArrowRight"){
        arrowRightPressed = true
    }
    else if (KeyDown == "ArrowLeft"){
        arrowLeftPressed = true
    };
    if (code == 32){
        spaceBarPressed = true
    }

}


function handleKeyUP(event){

    const KeyUp = event.key
    const code = event.keyCode

    if (KeyUp == "ArrowRight"){
        arrowRightPressed = false
    }
    
    else if (KeyUp == "ArrowLeft"){
        arrowLeftPressed = false
    }
    
    if (code == 32){
        spaceBarPressed = false
    }

}

export { handleKeyDown, handleKeyUP, arrowRightPressed, arrowLeftPressed, spaceBarPressed };