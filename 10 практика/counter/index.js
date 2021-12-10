let counter = document.getElementById("counter");
let count =0;



let interval = setInterval(plus,10);


function plus(){
    if(count!=1001){
        counter.innerHTML = "Прослушиваний: "+ count;
        count++;
    }else{
        clearInterval(interval);
    }
}