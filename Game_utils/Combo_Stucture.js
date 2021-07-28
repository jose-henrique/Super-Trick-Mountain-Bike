import { 
    arrowLeftPressed, 
    arrowUpPressed, 
    arrowRightPressed,
    arrowDownPressed,
    spaceBarPressed } from "./handleKeys.js";

import Charcter  from "../Game_objects/Charcter.js";





var key1_1 = false
var key2_1 = false
var key3_1 = false

function firstTrick(){

    var LastKey = 0
    var FirstKey = 0

    

    if (arrowLeftPressed){
        FirstKey = Date.now()
        if(!key1_1 && !key2_1 && !key3_1){
            key1_1 = true
        }
    }
    
    if (arrowUpPressed){
        if (key1_1 && !key2_1 && !key3_1){
            key2_1 = true
        }
    }
    
    
    if (spaceBarPressed){
        LastKey = Date.now()
        if (key1_1 && key2_1 && !key3_1){
            key3_1 = true
        }
    }

    if (LastKey - FirstKey > 300){
        key1_1 = false
        key2_1 = false
        key3_1 = false
    }

    if (key1_1 && key2_1 && key3_1){
        key1_1 = false
        key2_1 = false
        key3_1 = false
        console.log("oi")
        
        if(Charcter.horizontalMoviment > 1 || Charcter.horizontalMoviment < -3){
            return true
        }
    }
}



var key1_2 = false
var key2_2 = false
var key3_2 = false

function secondTrick(){
    var LastKey = 0
    var FirstKey = 0
    
    if (arrowRightPressed){
        FirstKey = Date.now()
        if(!key1_2 && !key2_2 && !key3_2){
            key1_2 = true
        }
    }
    
    if (arrowDownPressed){
        if (key1_2 && !key2_2 && !key3_2){
            key2_2 = true
        }
    }
    
    
    if (spaceBarPressed){
        LastKey = Date.now()
        if (key1_2 && key2_2 && !key3_2){
            key3_2 = true
        }
    }

    if (LastKey - FirstKey > 300){
        key1_2 = false
        key2_2 = false
        key3_2 = false
    }

    if (key1_2 && key2_2 && key3_2){
        key1_2 = false
        key2_2 = false
        key3_2 = false
        if(Charcter.horizontalMoviment > 3 || Charcter.horizontalMoviment < -3){
            return true
        }
    }
}


var key1_3 = false
var key2_3 = false
var key3_3 = false

function thirdTrick(){
    var LastKey = 0
    var FirstKey = 0
    
    if (arrowUpPressed){
        FirstKey = Date.now()
        if(!key1_3 && !key2_3 && !key3_3){
            key1_3 = true
        }
    }
    
    if (arrowRightPressed){
        if (key1_3 && !key2_3 && !key3_3){
            key2_3 = true
        }
    }
    
    
    if (arrowLeftPressed){
        LastKey = Date.now()
        if (key1_3 && key2_3 && !key3_3){
            key3_3 = true
        }
    }

    if (LastKey - FirstKey > 300){
        key1_3 = false
        key2_3 = false
        key3_3 = false
    }

    if (key1_3 && key2_3 && key3_3){
        key1_3 = false
        key2_3 = false
        key3_3 = false
        if(Charcter.horizontalMoviment > 3 || Charcter.horizontalMoviment < -3){
            return true
        }
    }
}

export {firstTrick, secondTrick, thirdTrick}