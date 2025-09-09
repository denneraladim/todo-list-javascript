
// Adicionar Tarefas, Pegar o texto dentro do input e Adicionar tag html com JavaScript

const AdicionarTarefa = () => {
    const valorDoInput = document.querySelector("input").value

    const li = document.createElement("li")

    li.innerHTML = valorDoInput + "<span>❌</span>"

    document.querySelector("ul").appendChild(li)

    valorDoInput = ""
}






