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
function checkRepetition(numVal){
    var numbers = []
    for(i =0; i<numVal.length;i++){
        if(numbers.includes(numVal[i])){
            return true
        }
        else{numbers[numbers.length]=numVal[i]}
    }
    return false    
}

function start(){
    if(guesses!=10 && guesses!=0){
        const ul = document.getElementById("guesses")
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("You are already in a game, you have "+(10-guesses)+" tries remaining."))
        ul.appendChild(li)
        return

    }

    const ul = document.getElementById("guesses")
    guesses = 0
    ul.innerHTML = ''
    randomVal = ""
    const li = document.createElement('li')
        li.appendChild(document.createTextNode("Game has begun. You have 10 tries"))
        ul.appendChild(li)


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
    
    const value = document.getElementById("textSpace").value
    if(value.length!=5){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("ONLY 5 DIGIT NUMBERS!"))
        ul.appendChild(li)
        return
    }
    const checker = checkRepetition(value)
    if(checker){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode("No repetition of digits allowed!"))
        ul.appendChild(li)
        return
    }
    guesses+=1
    var correct_pos = 0
    var correct = 0
    if (value==randomVal){
        guesses=0
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
