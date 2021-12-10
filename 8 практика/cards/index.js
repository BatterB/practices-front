let card1 = document.getElementById('card');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');

card1.addEventListener("mouseover",()=>{
    card2.classList.add("hovered");
    card3.classList.add("hovered")
}
)

card1.addEventListener("mouseout",()=>{
    card2.classList.remove("hovered");
    card3.classList.remove("hovered")
}
)

card2.addEventListener("mouseover",()=>{
    card.classList.add("hovered");
    card3.classList.add("hovered")
}
)

card2.addEventListener("mouseout",()=>{
    card.classList.remove("hovered");
    card3.classList.remove("hovered")
}
)

card3.addEventListener("mouseover",()=>{
    card2.classList.add("hovered");
    card.classList.add("hovered")
}
)

card3.addEventListener("mouseout",()=>{
    card2.classList.remove("hovered");
    card.classList.remove("hovered")
}
)