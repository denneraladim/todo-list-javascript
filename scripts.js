

// Adicionar Tarefas, Pegar o texto dentro do input e Adicionar tag html com JavaScript

const AdicionarTarefa = () => {
    let valorDoInput = document.querySelector("input").value

    const li = document.createElement("li")

    li.innerHTML = valorDoInput + '<span onclick="DeletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

const DeletarTarefa = (li) => {

    li.parentElement.remove()
}




