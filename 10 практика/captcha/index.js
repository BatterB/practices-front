function randWord(){  
    let s ='', letters ='abcdefghijklmnopqrstuvwxyz0123456789', aL = letters.length;
    while(s.length < 7)
      s += letters[Math.random() * aL|0];
    return s;
}

let textField = document.getElementById("captcha-text");
let captchaText = randWord();
textField.innerHTML = captchaText;
let statusCaptcha = document.getElementById("status");

let form = document.getElementById("captcha-form")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let captchaInput = document.getElementById("task-input").value;
    if (captchaInput === "") {
        alert("Введите хотя бы что нибудь");
    } else {
        if (captchaText===captchaInput){
            statusCaptcha.innerHTML = "Правильно, похоже вы не робот";
            statusCaptcha.classList.add("true");
            statusCaptcha.classList.remove("false");
            setTimeout(refresh,3000)
        }else{
            statusCaptcha.innerHTML = "Неверно, попробуйте еще раз"
            statusCaptcha.classList.add("false");
            statusCaptcha.classList.remove("true");
        }
    }
});

let refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click",refresh);


function refresh(){
    captchaText = randWord();
    textField.innerHTML = captchaText;
}
