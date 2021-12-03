
let secret = Math.ceil((Math.random() * 100));
console.log(`secret ${secret}`);
    


let count=10;
function chekCount() {
    count--;
    let attemptsOutput= document.getElementById('attemptsOutput');  
    attemptsOutput.innerHTML= `${count}`;
}
  

function checkNumber()

{   
    let tryNumber = document.getElementById('numberInput').value; 
    let result = document.getElementById('advicePlace');
    chekCount();
    if (count>=1) 
    {
        {if (secret==tryNumber)
        {result.innerHTML = 'Вы угадали!!!';
        attemptsOutput.innerHTML= `Поздравляю!`;
        return;}
        else if (secret>tryNumber)
            {result.innerHTML = 'Мое число больше вашего.';}
        else
            {result.innerHTML = 'Мое число меньше вашего.';} 
        } 
        document.getElementById('numberInput').value='';
         console.log(`count ${count}`);
    }
    else if (count<=0)    
    {       if (secret==tryNumber)
            {result.innerHTML = 'Вы угадали!!!';
            attemptsOutput.innerHTML= `Поздравляю!`;
            return;}
        else 
            {attemptsOutput.innerHTML= ` Игра окончена`;
             result.innerHTML = 'К сожалению, Вы не угадали.';
             document.getElementById('numberInput').value='';
             return;}          
    }  
}


