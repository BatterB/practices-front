let card = document.getElementById("card");

card.addEventListener("mouseenter",()=>{
    card.classList.remove("hide");
    card.classList.add("active");
})

card.addEventListener("mouseout",()=>{
    card.classList.remove("active");
    card.classList.add("hide");
    image.classList.add("mini");
    image.classList.remove("big");
    isOpen=0;
})

let image = document.getElementById("image");
let isOpen=0;

image.addEventListener("click",()=>{
    if(isOpen===0){
        image.classList.add("big");
        image.classList.remove("mini");
        isOpen=1;
    } else{
        image.classList.add("mini");
        image.classList.remove("big");
        isOpen=0;
    }
})