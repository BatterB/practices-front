let endTime = new Date(2022, 1, 10).getTime() / 1000;

function setClock() {
    let elapsed = new Date().getTime() / 1000;
    let totalSec =  endTime - elapsed;
    let d = parseInt( totalSec / 86400 );
    let h = parseInt( totalSec / 3600 ) % 24;
    let m = parseInt( totalSec / 60 ) % 60;
    let s = parseInt(totalSec % 60, 10);
    let result ="Осталось "+ d + " дней " + h + " часов " + m + " минут " + s + " секунд до сессии";
    document.getElementById('clock').innerHTML = result;
    setTimeout(setClock, 1000);
}
setClock();