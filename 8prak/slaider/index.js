let rightArrow = document.getElementById("right");
let leftArrow = document.getElementById("left");
let imageNum = 1;
let textNum = 11;

rightArrow.addEventListener("click",()=>{
    let nowImage = document.getElementById(imageNum);
    let nowText = document.getElementById(textNum);
    imageNum+=1;
    textNum+=1;
    if(imageNum>4){
        imageNum=1;
    }
    if(textNum>14){
        textNum=11;
    }
    let newImage = document.getElementById(imageNum);
    let newText = document.getElementById(textNum);
    nowImage.classList.add("hide");
    newImage.classList.remove("hide");
    newImage.classList.add("show");
    nowText.classList.add("hide");
    newText.classList.remove("hide");
    newText.classList.add("show");
}
)

leftArrow.addEventListener("click",()=>{
    let nowImage = document.getElementById(imageNum);
    let nowText = document.getElementById(textNum);
    imageNum-=1;
    textNum-=1;
    if(imageNum<1){
        imageNum=4;
    }
    if(textNum<11){
        textNum=14;
    }
    let newImage = document.getElementById(imageNum);
    let newText = document.getElementById(textNum);
    nowImage.classList.add("hide");
    newImage.classList.remove("hide");
    newImage.classList.add("show");
    nowText.classList.add("hide");
    newText.classList.remove("hide");
    newText.classList.add("show");
}
)