

function exer04(){
    let precounit = parseFloat(document.getElementById("precounit").value);
    let qtde = parseFloat(document.getElementById("qtde").value);
    let valorrecebido = parseFloat(document.getElementById("valorrecebido").value);
    

    let troco = valorrecebido - (precounit * qtde)
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Preço Unit R$: " + precounit+ "<br>Qtde: " + qtde +"<br>Valor Recebido R$:  " + valorrecebido + "<br>Troco R$:  " + troco.toFixed(2) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaispreco(){
 var preco = parseFloat(document.getElementById("precounit").value);
 var precod = document.getElementById("precounit");
 precod.value =preco.toFixed(2)


}
function decimaisvalor(){
    var valor = parseFloat(document.getElementById("valorrecebido").value);
    var valord = document.getElementById("valorrecebido");
    valord.value =valor.toFixed(2)
   
   
   }
  
   
   
   


