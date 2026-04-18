let carrinho = [];
let cliques = 0;

// Adiciona ao carrinho capturando dados do card automaticamente
function adicionarAoCarrinho(botao) {
    const card = botao.parentElement;
    const nome = card.querySelector("h3").innerText;
    const imagem = card.querySelector("img").src;

    carrinho.push({ nome, imagem });
    
    // Incrementa contador de cliques
    cliques++;
    document.getElementById("contador").innerText = cliques;
    
    // Abre o carrinho para mostrar o produto adicionado
    mostrarCarrinho();
}

// Mostra o modal com scroll lateral e imagens
function mostrarCarrinho() {
    const modal = document.getElementById("modalCarrinho");
    const lista = document.getElementById("listaCarrinho");

    lista.innerHTML = ""; // Limpa lista anterior

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>O carrinho está vazio!</p>";
    } else {
        carrinho.forEach((item) => {
            const cardItem = document.createElement("div");
            cardItem.className = "item-carrinho-card";
            cardItem.innerHTML = `
                <img src="${item.imagem}">
                <p>${item.nome}</p>
            `;
            lista.appendChild(cardItem);
        });
    }
    modal.style.display = "block";
}

function fecharCarrinho() {
    document.getElementById("modalCarrinho").style.display = "none";
}

function limparCarrinho() {
    carrinho = [];
    cliques = 0;
    document.getElementById("contador").innerText = cliques;
    mostrarCarrinho();
}

// Funções de Estilo e Eventos
function destacarCard(elemento) {
    elemento.style.border = "2px solid #ff9900";
}

function removerDestaque(elemento) {
    elemento.style.border = "none";
}

function clicouImagem() {
    alert("Você clicou na imagem da nossa loja gamer!");
}

function mudarTema() {
    const body = document.body;
    if (body.style.backgroundColor === "rgb(31, 31, 31)") {
        body.style.backgroundColor = "white";
        body.style.color = "#111";
    } else {
        body.style.backgroundColor = "#1f1f1f";
        body.style.color = "white";
    }
}

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    if (nome === "") {
        alert("Por favor, preencha seu nome.");
        return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modalCarrinho");
    if (event.target == modal) {
        fecharCarrinho();
    }
}