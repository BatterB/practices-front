let email = document.getElementById("email-input");
let password = document.getElementById("pass-input");
let submit = document.getElementById("submit-button");

const isEmail = (str) => /^(.+)@(.+)\.(.+)$/.test(str)

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(email.value != ""){
        if(password.value != ""){
            if(isEmail(email.value)){
                window.location.href = "http://google.com";
            }else{
                email.classList.add("false");
                alert("Формат введеной почты не верен");
            }
        }else{
            password.classList.add("false");
            alert("Поле пароля не может быть пустым");
        }
    }else{
        email.classList.add("false");
        alert("Поле почты не может быть пустым");
    }
})
