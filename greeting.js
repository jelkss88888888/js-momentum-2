const hello = document.querySelector(".js-greetingHello");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");


function hideForm() {
    form.classList.remove("showing");
    form.classList.add("hiding");
}


function greetingHello(name) {
    hello.innerText = `Welcome ${name}`;
}





function loadLS() {
    hello.classList.remove("hiding");
    hello.classList.add("showing");
    const LS_USER = localStorage.getItem("currentUser");
    const user = LS_USER;
    greetingHello(user);
    hideForm();
}

function saveLS() {
    event.preventDefault();
    const inputValue = input.value;
    localStorage.setItem('currentUser', inputValue);
    loadLS();
}

function submitHandle() {
    form.classList.add("showing");
    form.classList.remove("hiding");
    hello.classList.add("hiding");
    form.addEventListener("submit", saveLS);
}




function init() {
    if(localStorage.getItem("currentUser") !== null) {
        hideForm();
        loadLS();
    } else {
        submitHandle();
    }
};
init();