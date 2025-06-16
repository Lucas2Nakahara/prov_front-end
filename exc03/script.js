let livros = JSON.parse(localStorage.getItem("livros")) || [];

function renderizarLivros() {
    const lista = document.getElementById("listaLivros");
    lista.innerHTML = "";

    livros.forEach((livro, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${livro.titulo}</strong> - ${livro.autor}`;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️ Editar";
    btnEditar.onclick = () => editarLivro(index);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "🗑️ Remover";
    btnRemover.onclick = () => removerLivro(index);

    li.appendChild(btnEditar);
    li.appendChild(btnRemover);

    lista.appendChild(li);
    });

    localStorage.setItem("livros", JSON.stringify(livros));
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();

    if (titulo === "" || autor === "") {
    alert("Preencha todos os campos!");
    return;
    }

    livros.push({ titulo, autor });
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    renderizarLivros();
}

function editarLivro(index) {
    const novoTitulo = prompt("Novo título:", livros[index].titulo);
    const novoAutor = prompt("Novo autor:", livros[index].autor);

    if (novoTitulo && novoAutor) {
    livros[index] = { titulo: novoTitulo, autor: novoAutor };
    renderizarLivros();
    }
}

function removerLivro(index) {
    if (confirm("Deseja remover este livro?")) {
    livros.splice(index, 1);
    renderizarLivros();
    }
}

renderizarLivros();
