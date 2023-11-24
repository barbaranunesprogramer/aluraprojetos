let totalGeral =0;
document.getElementById('lista-produtos').innerHTML='';
document.getElementById ('valor-total').innerHTML='R$ 0';



function adicionar(){
    //recuperar valores , nome do produto , quantidade , valor
let produto= document.getElementById('produto').value;
let nomeProduto =produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular o preço
let preco = (quantidade* valorUnitario);
    //adicionar o produto no carrinho
    let carrinho= document.getElementById('lista-produtos');
    carrinho.innerHTML =carrinho.innerHTML +`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>`
    //atualizar o valor total (grande)'
    totalGeral= totalGeral + preco;
    let campoTotal = document.getElementById ('valor-total');
    campoTotal.textContent=`R$ ${totalGeral}`;
    document.getElementById('quantidade').value ='' ;
}

function limpar(){
    totalGeral =0;
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById ('valor-total').innerHTML='R$ 0';
    
}