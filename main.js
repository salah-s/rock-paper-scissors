
function getComputerChoice(){
    num =  Math.floor( Math.random()*3 );
    switch(num) {
        case 0 :
            return "rock";
            break;
        case 1 :
            return "paper";
            break;
        case 2 :
            return "scissors";
        default : 
        return "error";
    }

}


function getHumanChoice(){
    let choice = prompt("rock ,paper or scissors?");
    if(choice==null){return "exit";}
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        choice = prompt("try again");
        if(choice==null){return "exit";}
    }
    return choice;
}



function playRound (humanChoice,computerChoice){
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors"
        || humanChoice.toLowerCase() === "paper" && computerChoice === "rock"
        || humanChoice.toLowerCase() === "scissors" && computerChoice === "paper"){
            return 1;
        } else if (humanChoice.toLowerCase() === computerChoice) {
            return 5;
        } else {
            return 0;
        }
    
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    let roundCounter=0;
    
    while (humanScore !== 5 && computerScore !==5){
        roundCounter++;
        console.log("round: "+roundCounter + " humanscore:" + humanScore + " compscore:" + computerScore);

        let humanchoice = getHumanChoice() ;
        if(humanchoice=="exit"){break;}
        let compchoice = getComputerChoice();
        console.log(`humanchoice: ${humanchoice} ,compchoice: ${compchoice}`);
        if (playRound(humanchoice,compchoice)===1){
            humanScore++;
        } else if (playRound(humanchoice,compchoice)=== 0) {
            computerScore++;
        }
    
    }
    let winner = (humanScore ===5)? "human" :(computerScore===5)? "computer": "no one";
    console.log("winner is " + winner);


}

document.getElementById("PlayButton").addEventListener("click", function() {
  playGame();
});


