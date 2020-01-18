const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const lists = document.querySelector(".js-todoLists");

let todoArray = [];

function saveToLS() {
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

function deleteBtn(event) {
    const btn = event.target;
    const li = btn.parentNode;
    lists.removeChild(li);
    const newtodoArray = todoArray.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todoArray = newtodoArray;   
    saveToLS();

}

function makeTodo(inputValue) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const text = document.createElement("span");
    const idNumber = todoArray.length + 1;
    text.innerText = inputValue;
    delBtn.innerText = "❌";
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteBtn);
    li.appendChild(text);
    lists.appendChild(li);
    li.id = idNumber;
    const todoObj = {
        text: inputValue,
        id: idNumber
    };
    todoArray.push(todoObj);
    saveToLS();
    todoInput.value = "";
}

function submitHandle(event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    makeTodo(inputValue);
}

function loadLSTodo() {
    const loadedTodos = localStorage.getItem("todos");
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function (todo) {
            makeTodo(todo.text);
        });
    }
}

function init() {
    loadLSTodo();
    todoForm.addEventListener("submit", submitHandle);
}
init();