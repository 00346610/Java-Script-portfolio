const getUserChoice=(userInput)=>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock'|| userInput==='paper'||userInput==='scissors'){
        return userInput;        
    }else{
        return console.log('Error:Invalid Choice!')
    }
};


const getComputerChoice =()=>{
    const randomNumber=Math.floor(Math.random()*3);
    
        switch(randomNumber){
            case 0:
                return 'rock';
        
            case 1:
                return 'paper';
        
            case 2:
                return 'scissors'
    }   
};

const determineWinner=(userChoice,computerChoice)=>{
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    
        userChoice= userChoice.toLowerCase();
        computerChoice=computerChoice.toLowerCase();
        
            if(userChoice===computerChoice){
                return 'The game is a tie';
            }
    
        
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return 'You lose! Paper beats Rock. '
        }else{
            return 'You win! Rock beats Scissors'
        }
    }
    
    
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
          return 'You lose! Scissors beats Paper. '  
        }else{
            return 'You win! Paper beats Rock';
        }
    }
    
    
    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return 'You lose! Rock beats Scissors.';
        }else{
            return 'You win! Scissors beats Paper'
        }
    }
    
    return console.log('Error:Invalid Choice')
    
};


console.log('-------------Rock, Paper , Scissors-------------');

const userChoice=getUserChoice('rock');
const computerChoice=getComputerChoice();

console.log(`Computer Choice: ${computerChoice}`);
console.log(determineWinner(userChoice,computerChoice));








