

function exer07(){
    
    let distancia = parseFloat(document.getElementById("distancia").value);
    let combustivel = parseFloat(document.getElementById("combustivel").value);

    let consumo = (distancia / combustivel);



    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Consumo médio " + consumo.toFixed(3);
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaiscombustivel(){
 var combustivel = parseFloat(document.getElementById("combustivel").value);
 var combustiveld = document.getElementById("combustivel");
 combustiveld.value =combustivel.toFixed(1)


}
   
   
   
   


