let searchBlock = document.getElementById("search");
let isOpen=0;
let inputBlock = document.createElement("input");

document.addEventListener("click",(e)=>{
    if(isOpen===1 && e.target!=inputBlock){
        isOpen=0;
        searchBlock.classList.add("closed-input");
        searchBlock.classList.remove("open-input");
        searchBlock.removeChild(inputBlock);
    }
})

searchBlock.addEventListener("click",()=>{
    if(isOpen===0){
        searchBlock.classList.remove("closed-input");
        searchBlock.classList.add("open-input");
        searchBlock.appendChild(inputBlock);
        setTimeout(()=>{isOpen=1},1000)
    }
})




