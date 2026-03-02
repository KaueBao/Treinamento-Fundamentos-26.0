
let jogadores = [
    { nome: "André Ramalho", desc: "Muito ruim, pouco qi.", preco: "R$ 2,00", img: "./assets/imgs/andreramalho.png" },
    { nome: "Pedro Raul", desc: "Rei das noites paulistas.", preco: "R$ 5,00", img: "./assets/imgs/pedroraul-1.jpg" },
    { nome: "Hugo 🥾", desc: "Avenida na lateral esquerda.", preco: "R$ 1,25", img: "./assets/imgs/hugp.jpg" },
    { nome: "Charles", desc: "Não cuida nem dele.", preco: "R$ 3,00", img: "./assets/imgs/charles.png" },
    { nome: "Tchoca", desc: "Ruim e novo.", preco: "R$ 1,25", img: "./assets/imgs/tchoca.jpeg" }
];

let totalCarrinho = 0;
let vitrine = document.getElementById("vitrine-jogadores");

for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    
    vitrine.innerHTML += `
        <div class="card">
            <img src="${jogador.img}" alt="${jogador.nome}">
            <h3>${jogador.nome}</h3>
            <p>${jogador.desc}</p>
            <p><b>${jogador.preco}</b></p>
            <button onclick="adicionar()">Adicionar</button>
            <button onclick="remover()">Remover</button>
        </div>
    `;
}

function adicionar() {
    totalCarrinho = totalCarrinho + 1;
    document.getElementById("cart-count").innerText = totalCarrinho;
}

function remover() {
    if (totalCarrinho > 0) {
        totalCarrinho = totalCarrinho - 1;
        document.getElementById("cart-count").innerText = totalCarrinho;
    }
}