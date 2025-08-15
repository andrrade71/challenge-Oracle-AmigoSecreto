let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nome);
  input.value = "";
  exibirAmigos();
}

function exibirAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}
