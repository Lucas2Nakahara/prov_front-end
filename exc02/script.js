let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function salvarContato() {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (nome === "" || telefone === "") return alert("Preencha os campos!");

    contatos.push({ nome, telefone });
    localStorage.setItem("contatos", JSON.stringify(contatos));
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    listarContatos();
}

function listarContatos() {
    const lista = document.getElementById("listaContatos");
    lista.innerHTML = "";

    contatos.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.nome} - ${c.telefone}`;
    lista.appendChild(li);
    });
}

listarContatos();
