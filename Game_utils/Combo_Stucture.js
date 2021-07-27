import { 
    arrowLeftPressed, 
    arrowUpPressed, 
    arrowRightPressed, 
    spaceBarPressed } from "./handleKeys.js";
import { frames } from "../script.js"

var key1 = false
var key2 = false
var key3 = false

// var initial = new Date.now()
// var final = new Date()

function firstTrick(){
    if (arrowUpPressed){
        if(!key1 && !key2 && !key3){
            key1 = true
        }
    }
    
    if (arrowLeftPressed){
        if (key1 && !key2 && !key3){
            key2 = true
        }
    }
    
    
    if (spaceBarPressed){
        var final = Date.now()
        if (key1 && key2 && !key3){
            key3 = true
        }
    }

    if (final - initial > 300){
        key1 = false
        key2 = false
        key3 = false
    }

    if (key1){
        var initial = Date.now()
    }

    if(final){

        console.log(`final: ${final}`)
    }

    if(initial){

        console.log(`inicial: ${initial}`)
    }

    if(initial && final){
        console.log(final-initial)
    }


    if (key1 && key2 && key3){
        key1 = false
        key2 = false
        key3 = false 
        return true
    }
}

export {firstTrick}