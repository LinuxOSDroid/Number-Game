var randomVal = ""
var guesses = 0

function checkIn(a,b){
    for(let i = 0; i<a.length; i++){
        if(a[i] == b){
            return true
        }
    }
    return false
}

function start(){
    const ul = document.getElementById("guesses")
    guesses = 0
    ul.innerHTML = ''
    randomVal = ""

    while (randomVal.length<5){
        rand = Math.floor(Math.random()*10)
        if (randomVal.length<1){
            randomVal = randomVal+rand
        }
        else if(checkIn(randomVal, rand)){
            continue

        }
        else{
            randomVal = randomVal+rand
        }
    }
}
function logicMain(){
    const ul = document.getElementById("guesses")
    if(randomVal.length==0){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("You haven't started a game yet. Press start to begin."))
        ul.appendChild(li)
        return
    }
    guesses+=1
    const value = document.getElementById("textSpace").value
    var correct_pos = 0
    var correct = 0
    if (value==randomVal){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("That's correct! You win. Start again."))
        ul.appendChild(li)
        randomVal = ""
        return
    }
    for(let i =0;i<=4;i++){
        if(randomVal[i] == value[i]){
            correct_pos+=1
        }   
        else if (checkIn(randomVal, value[i])){
            correct+=1
        }

    }
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(value+": Number of digits at correct position "+correct_pos+" \n Number of digits at wrong position "+correct))
    ul.appendChild(li)
    if(guesses==10){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("That's 10 tries! The number was "+randomVal))
        ul.appendChild(li)
        randomVal = ""
        return
    }
}