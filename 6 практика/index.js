let menuButton = document.getElementById('menuButton')
let nav = document.getElementById('navigation')
let state = 0;

let line = document.getElementsByClassName('line')

menuButton.addEventListener("click",()=>{
    
    if(state === 0){
        nav.classList.add('show-menu');
        state= 1;
        Array.from(line).forEach(element => {
            element.style.display = 'none';
        });
        menuButton.classList.add('crossButton');

    }
    else{
        nav.classList.remove('show-menu');
        state =0;
        Array.from(line).forEach(element => {
            element.style.display = 'block';
        });
        menuButton.classList.remove('crossButton');
    }
}
)