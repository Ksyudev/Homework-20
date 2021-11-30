
let secret = Math.floor((Math.random() * 101));
console.log(`secret ${secret}`);



let count=10;
function chekCount() {
    count--;
    if (count<=1) 
    {return newGame()}
    let attemptsOutput= document.getElementById('attemptsOutput')
    attemptsOutput.innerHTML= `${+count}`;}
    
function checkNumber()

{   chekCount();
    let tryNumber = document.getElementById('numberInput').value; 
    let result = document.getElementById('advicePlace');
    

    if (secret==tryNumber)
    {result.innerHTML = 'Вы угадали!!!';
    return;}
    else if (secret>tryNumber)
        {result.innerHTML = 'Мое число больше вашего.';}
    else
        {result.innerHTML = 'Мое число меньше вашего.';} 
}

function newGame() {
    let result = document.getElementById('advicePlace');
    result = 'Игра окончена.';
}

