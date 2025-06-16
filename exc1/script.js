let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizar() {
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️ Editar";
    btnEditar.onclick = () => editarTarefa(index);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "🗑️ Remover";
    btnRemover.onclick = () => removerTarefa(index);

    li.appendChild(btnEditar);
    li.appendChild(btnRemover);

    lista.appendChild(li);
    });

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const valor = input.value.trim();

    if (valor === "") return;

    tarefas.push(valor);
    input.value = "";
    renderizar();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizar();
}

function editarTarefa(index) {
    const nova = prompt("Editar tarefa:", tarefas[index]);
    if (nova !== null && nova.trim() !== "") {
    tarefas[index] = nova.trim();
    renderizar();
    }
}

renderizar();
