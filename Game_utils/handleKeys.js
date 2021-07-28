var arrowUpPressed = false;
var arrowRightPressed = false;
var arrowLeftPressed = false;
var spaceBarPressed = false;
var arrowDownPressed = false;

function handleKeyDown(event){

    const KeyDown = event.key
    const code = event.keyCode

    if (KeyDown == "ArrowRight"){
        arrowRightPressed = true
    }
    if (KeyDown == "ArrowLeft"){
        arrowLeftPressed = true
    };
    if (KeyDown == "ArrowUp"){
        arrowUpPressed = true
    }

    if (KeyDown == "ArrowDown"){
        arrowDownPressed = true
    }

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
    
    if (KeyUp == "ArrowUp"){
        arrowUpPressed = false
    }
    
    else if (KeyUp == "ArrowLeft"){
        arrowLeftPressed = false
    }

    if (KeyUp == "ArrowDown"){
        arrowDownPressed = false
    }
    
    if (code == 32){
        spaceBarPressed = false
    }

}

export { 
    handleKeyDown, 
    handleKeyUP, 
    arrowRightPressed, 
    arrowLeftPressed, 
    arrowUpPressed,
    arrowDownPressed, 
    spaceBarPressed
};