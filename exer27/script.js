

function exer27(){
    let palavra = document.getElementById("palavra").value;  
    let arr = palavra.split('')
    let  inverter = arr.reverse()
    let converter = inverter.join('')
    if( palavra === converter){
        var resposta = "A palavra " + palavra + " é Palíndroma"
    }else{
        var resposta = "A palavra " + palavra + " não é Palíndroma"
    }

    let resultado1 = document.getElementById("conteudoresultado");
   resultado1.innerHTML = resposta;

}

function novo(){
    document.location.reload(true);
}