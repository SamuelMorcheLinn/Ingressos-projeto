function comprar(){
    let produtoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidadeTexto = document.getElementById('qtd').value;
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    let quantidadePista = document.getElementById('qtd-pista').textContent;
    console.log(produtoSelecionado);
    console.log(quantidadeTexto);
    if (produtoSelecionado == 'inferior'){
       let novaQuantidadeI = quantidadeInferior - quantidadeTexto;
       innerI = document.getElementById('qtd-inferior');
       innerI.innerHTML = `<li><span id="qtd-inferior">${novaQuantidadeI}</span></li>`;
       console.log(novaQuantidadeI);
    }else if(produtoSelecionado == 'superior'){
       let novaQuantidadeS = quantidadeSuperior - quantidadeTexto;
       innerS = document.getElementById('qtd-superior');
       innerS.innerHTML = `<li><span id="qtd-superior">${novaQuantidadeS}</span></li>`;
       console.log(novaQuantidadeS);
    }else{
       let novaQuantidadeP = quantidadePista - quantidadeTexto;
       innerP = document.getElementById('qtd-pista');
        innerP.innerHTML = `<li><span id="qtd-pista">${novaQuantidadeP}</span></li`;
        console.log(novaQuantidadeP);
    }
}