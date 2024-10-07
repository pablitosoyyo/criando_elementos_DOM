// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Loja de calhambeques";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>FORD LOW BOY</h2>
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_915285-MLB27883139381_082018-F.webp" alt="ford low boy">
    <p>Marca-FORD, Modelo - FORD LOW BOY, ano- 1929, vermelho, Motor - V8.</p>
    <p id="preco">R$ 290.000</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)