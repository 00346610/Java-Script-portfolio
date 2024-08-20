let raceNumber = Math.floor(Math.random()*1000);

const registerEarly=true;

let runnersAge='18';

if(runnersAge>=18 && registerEarly){
    raceNumber+=1000;
}

if(runnersAge>18 && registerEarly){
    console.log(`Your race starts at 9:30am your race number is : ${raceNumber}`)
}else if(runnersAge<18 && !registerEarly){
    console.log(`Your race starts at 11:00am your race bumber is : ${raceNumber}`)
}else if(runnersAge<18){
    console.log(`Youth registrants run at 12:30 pm (regardless of registratio)your race number is:${raceNumber}`)
}else{
    console.log(`Please see the registraion desk. Your raceNumber is: ${raceNumber}`)
}