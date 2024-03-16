let choices = document.querySelectorAll(".rounded");
let result = document.querySelector(".resultbox");
let stones = document.querySelector(".stones");
let papers = document.querySelector(".papers");
let scissors=document.querySelector(".siscorrs");
let resultmsg = document.querySelector(".resultmsg");
let uscore = document.querySelector("#uscore");
let cscore = document.querySelector("#cscore");
let scorefix = document.querySelector(".score_fixing");
let sscore = document.querySelector("#score"); //showscore

let gameOver=false;
let userwin = true;
let userscore = 0;
let compscore = 0;
let wscore=0;
let startGame=false;


let clearscreen = () => {
    startGame=true;
    wscore =document.getElementById("button").value;
    scorefix.style.visibility = "hidden";
    sscore.innerText = `${wscore} is the winning score.`;
    return wscore;
};

const compchoice = () => {
    let options = ["stone", "paper", "siscorr"]; // Fixed typo here
    let randomindx = Math.floor(Math.random() * 3);
    let cchoice = options[randomindx];  
    if(cchoice=="stone"){
        stones.style.boxShadow="0 4px 8px 0 rgba(248, 3, 3, 0.2), 0 6px 20px 0 rgba(255, 0, 0, 0.432)"
        papers.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        scissors.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }   
    else if(cchoice="paper"){
        papers.style.boxShadow="0 4px 8px 0 rgba(248, 3, 3, 0.2), 0 6px 20px 0 rgba(255, 0, 0, 0.432)"
        stones.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        scissors.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }   
    else if(cchoice=="siscorr"){
        scissors.style.boxShadow="0 4px 8px 0 rgba(248, 3, 3, 0.2), 0 6px 20px 0 rgba(255, 0, 0, 0.432)"
        stones.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        papers.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }  
    return cchoice;
};

const showwinner = (userwin, uoption, coption, wscore) => {
    if (userwin) {
        userscore++;
        uscore.innerText = `you - ${userscore}`;
        result.classList.remove("draw", "looser");
        resultmsg.innerText = `You win, your ${uoption} beats ${coption}`;
        result.classList.add("winner");
    } else {
        compscore++;
        cscore.innerText = `comp - ${compscore}`;
        result.classList.remove("draw", "winner");
        resultmsg.innerText = `You lose, ${coption} beats your ${uoption}`;
        result.classList.add("looser");
    }
    if (userscore == wscore || compscore == wscore) {
        gameover();
    }
};

let playgame = (uoption) => {
    console.log(uoption, " is the user option");

    // generate computer choice
    let coption = compchoice();
    console.log(coption, " is the comp option");
    if (uoption == coption) {
        result.classList.remove("winner", "looser");
        console.log("It's a draw");
        resultmsg.innerText = "It was a Draw";
        result.classList.add("draw");
    } else if (uoption == "stone") {
        userwin = coption == "paper" ? false : true;
        showwinner(userwin, uoption, coption,wscore);
    } else if (uoption == "paper") {
        userwin = coption == "scissors" ? false : true;
        showwinner(userwin, uoption, coption,wscore);
    } else if (uoption == "siscorr") {
        userwin = coption == "stone" ? false : true;
        showwinner(userwin, uoption, coption,wscore);
    }
};

const gameover = () => {
    gameOver=true;
    if (userscore > compscore) {
        sscore.innerText = `You are the winner`;

    } else {
        sscore.innerText = `Computer is the winner`;
    }
};


let handleClick = (event) => {
    if (!gameOver) {
        if(startGame){
        let uoption = event.target.getAttribute("id");
        playgame(uoption);
        }
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", handleClick);
});

const removeEventListeners = () => {
    choices.forEach(choice => {
        choice.removeEventListener("click", handleClick);
    });
};