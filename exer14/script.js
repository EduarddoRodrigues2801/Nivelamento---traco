

function exer14(){
    
    let preco = parseFloat(document.getElementById("preco").value);
    let qtde = parseFloat(document.getElementById("qtde").value);
    let valor = parseFloat(document.getElementById("valor").value);
    
    let valorpagar = (preco * qtde);
    var troco = (valor - valorpagar).toFixed(2);

    if(valor > valorpagar ){
        var diferenca ="TROCO = R$ " + troco;
    }else{
        var diferenca = "DINHEIRO INSUFICIENTE, FALTAM "+ ((valorpagar - valor).toFixed(2)) + " REAIS"
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = diferenca ; 
    
    
} 

function novo(){
    document.location.reload(true);

}

