let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    //rock paper scissors
    const options = ["rock", "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin,userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= `Great, You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `Oops, You loose.. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Try Again ";
    msg.style.backgroundColor = "grey";
}
const playGame = (userChoice) =>{
    //Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp >> scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice ==="rock" ? true : false;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})