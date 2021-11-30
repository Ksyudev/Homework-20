let secret = Math.floor(Math.random() * 101);
    console.log(`secret ${secret}`);

    let isFail = true;
for(let i=1; i<=10; i++) 
{
    function checkNumber() 
    {   let tryNumber = +numberInput.value; 
        if (secret==tryNumber)
        {advicePlace.innerHTML = 'Вы угадали!!!';
        isFail = false;} 
        else if (secret>tryNumber)
        {advicePlace.innerHTML = 'Мое число больше вашего.';}
        else if (secret<tryNumber) 
        {advicePlace.innerHTML = 'Мое число меньше вашего.';} 
    attemptsOutput.innerHTML = `${10-i}`;
    console.log(`i ${i}, tryNumber ${tryNumber}, secret ${secret}`);   
    }
}