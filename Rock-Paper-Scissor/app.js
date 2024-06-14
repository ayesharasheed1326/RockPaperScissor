userScore=0;
compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
//to generate random 
const genCompChoice=()=>{
//here will generate random between the choices,Rock,Paper,Scissor
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
//drawGame

const drawGame=()=>{
   
    msg.innerText="Game is Draw.Try Again.";
    msg.style.backgroundColor="#ffc300";
    msg.style.color=" #001d3d";

    };


//inside PlayGame both user and comp choices will be regisrtyered
const playGame=(userChoice)=>{
    

const compChoice=genCompChoice();

if(userChoice === compChoice){
    drawGame();

}
else{
let userWin=true;
if(userChoice==="rock"){
    //sc,p
   //comp will win so its will change it to false if its scissor user will win so its true
//    if(compChoice==="paper"){
//     userWin=false;
//    }
//    else{
//     userWin=true;
//    }

userWin=compChoice==="paper" ?false:true;

}
else if(userChoice==="scissor"){
    //r,p
userWin=compChoice==="rock"?false:true;
}
else{
    //p
    //r,s
    userWin=compChoice==="scissor"?false:true;
}
showWinner(userWin,userChoice,compChoice);
}
};

//showWinner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
      
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
           
            msg.innerText=`you Lose! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="Red";
            msg.style.color="white";
        
    }
}


//to access userchoice
choices.forEach((choice)=>{
const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
       playGame(userChoice);
    });
});