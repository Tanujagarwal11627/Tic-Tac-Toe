let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");


let turnO=false;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turnO=false;
    enableBtns();
    msgContainer.classList.add("hide");
};
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if(turnO===false)
        {
            boxes[i].innerText="X";
            boxes[i].style.color="#b0413e"
            turnO=true;
        }
        else{
            boxes[i].innerText='O';
            boxes[i].style.color="Blue";
            turnO=false;
        }
        boxes[i].disabled=true;
        checkWinner();
    });
}

const disableBtns=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
};
const enableBtns=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)

