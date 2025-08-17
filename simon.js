let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "purple", "yellow"]


let started = false;
let level = 0;

let h2 = document.querySelector("h2");



document.addEventListener("keypress", function(){
    if (started==false){
    console.log("game started");
    started= true;
    
    
    levelUp();

    }
});

function levelUp() {

    userSeq = [] ;
    level ++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *4);
    let randColor= btns[randIdx];

    let randBtn = document.querySelector(`.${randColor}`) ;

     console.log(randBtn)
     console.log(randColor)
     console.log(randIdx)
    //random button choose
    gameSeq.push(randColor)
    console.log(gameSeq);

    btnFlash(randBtn);
}

function btnFlash(b) {
    b.classList.add("flash")
    setTimeout(function (){
        b.classList.remove("flash");
    }, 250) ;
}

function userFlash(b) {
    b.classList.add("userflash")
    setTimeout(function (){
        b.classList.remove("userflash");
    }, 250) ;
}





function btnPress() {
    console.log(this)
    let btn = this ;
    userFlash(btn);

let userColor= btn.getAttribute("id");
 console.log(userColor)
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".b") ;

for ( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx){

    
    if (userSeq[idx]==gameSeq[idx]){
        console.log("Level Passed")
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1250);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start` ;
        document.querySelector("body").style.backgroundColor= "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white"
            reset();
        },  250) ;
        
    }
}

function reset() {
 started = false
 gameSeq = [];
 userSeq = [];
 level = 0;
}