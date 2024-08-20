var userName='Jane';

var userQuestion='Will I get promoted ?';

var randomNumber=Math.floor(Math.random()*8);

var eightBall = randomNumber;

console.log(userName ? `Hello, ${userName}! ${userQuestion}`:'Hello' );

switch(randomNumber){

case 0:
    eightBall='It is certain';
    break;
case 1:
    eightBall='It is decidedly so';
    break;
case 2:
    eightBall='try again';
    break;

case 3:
    eightBall='Can not tell at the moment';
    break;

case 4:
    eightBall='Do not count on it';
    break;
    
case 5:
    eightBall='My senses say no';
    break;
    
case 6:
    eightBall='Future not looking good =( ';
    break;
    
case 7:
    eightBall='Signs point to Yes';
    break;
}

console.log(`The magic 8 Ball says: ${eightBall}`);    
    