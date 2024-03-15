let choices=document.querySelectorAll(".rounded");
let result=document.querySelector(".resultbox");
let resultmsg=document.querySelector(".resultmsg");
let uscore=document.querySelector("#uscore");
let cscore=document.querySelector("#cscore");


let userwin=true;
let userscore=0;
let compscore=0;

const compchoice=()=>{
    let options=["stone","paper","siscorr"];
    let randomindx=Math.floor(Math.random()*3); //math.random chooses random number inculed decimal but math.floor ignores decimals multiplying it by 3 means numbers between 0-2
    return options[randomindx];
}

const showwinner=(userwin,uoption,coption)=>{
    if(userwin){
        userscore++;
        uscore.innerText=`you - ${userscore}`;
        result.classList.remove("draw","looser");
        resultmsg.innerText=`You win ,your ${uoption} beats ${coption}`;
        result.classList.add("winner");
    }
    else{
        compscore++;
        cscore.innerText=`comp - ${compscore}`;
        result.classList.remove("draw","winner");
        resultmsg.innerText=`You loose , ${coption} beats your ${uoption}`;
        result.classList.add("looser");
    }
}

let playgame=(uoption)=>{
    console.log(uoption," is the user option");
    ;
    // generate computer choice
    let coption=compchoice();
    console.log(coption," is the comp option");
    if(uoption==coption)
    {
        result.classList.remove("winner","looser");
        console.log("Its a draw");
        resultmsg.innerText="It was a Draw";
        result.classList.add("draw");
    }
    else if(uoption=="stone"){
        userwin = coption=="paper" ? false : true ;
        showwinner(userwin , uoption, coption);
    }
    else if(uoption=="paper"){
        userwin = coption=="siscorr" ? false : true ;
        showwinner(userwin , uoption, coption);
    }
    else if(uoption=="siscorr"){
        userwin = coption=="stone" ? false : true ;
        showwinner(userwin , uoption, coption);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let uoption=choice.getAttribute("id");
        playgame(uoption);
    });
});