
// Seleção de Elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


// Funções

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML ='<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
});






// Selecionar elementos do DOM

// const input = document.querySelector("input");
// const BotaoAdicionar = document.querySelector("#btn-adicionar");
// const lista = document.querySelector("ul");

// Evento para adicionar tarefa

// BotaoAdicionar.addEventListener("click", () => {
//     AdicionarTarefa();
// });

// Função para adicionar tarefa

// const AdicionarTarefa = () => {
//     const valorDoInput = input.value.trim();

//     if(valorDoInput === ""){
//         return;
//     }

//     // Cria o elemento li

//     const li = document.createElement("li");
//     li.textContent = valorDoInput;

//     // Cria o span de deletar

//     const span = document.createElement("span");
//     span.textContent = "❌";

//     // Evento de deletar a tarefa

//     span.addEventListener("click", () => {
//         li.remove();
//     });

//     // Monta a li e adiciona na lista

//     li.appendChild(span);
//     lista.appendChild(li);

//     // Limpa o input

//     input.value = "";
// };






