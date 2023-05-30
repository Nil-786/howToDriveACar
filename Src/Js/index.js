var burger = document.querySelector("#burger");
var dropdown = document.querySelector(".dropdown");
var intro = document.querySelector(".intro");
const moveButton = document.getElementById("toggle");
const bar = document.querySelector(".bar");
const log = document.getElementById('login');
const sign = document.getElementById('signup');
const text = document.getElementById('text');
const log_sm = document.getElementById('sign-sm');
const sign_sm = document.getElementById('sign-sm');
burger.onclick = function () {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        intro.style.marginTop = "200px";
        burger.innerHTML = '<i class="fa-solid fa-x"></i>';
        // sign.style.margintop = "130px";
    } else {
        dropdown.style.display = "none";
        intro.style.marginTop = "80px";
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        // sign.style.margintop = "0";
        
    }
}


moveButton.addEventListener("click", function () {
    bar.classList.toggle("move");
    if (text.innerHTML === 'Create an account.') {
        text.innerHTML = 'Already signed up!!!';
        moveButton.innerHTML = 'Login';
        sign.style.display = 'block';
        log.style.display = 'none';
    }else{
        text.innerHTML = 'Create an account.';
        moveButton.innerHTML = 'Sign up';
        sign.style.display = 'none';
        log.style.display = 'block';
    }

});

log_sm.addEventListener('click',function(){
    log.style.display = 'none';
    sign.style.display = 'block';
})

sign_sm.addEventListener('click', function(){
    log.style.display = 'block';
    sign.style.display = 'none';
})