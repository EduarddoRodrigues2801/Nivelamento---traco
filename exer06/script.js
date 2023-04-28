

function exer06(){
    let nome = document.getElementById("nome").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let horas = parseFloat(document.getElementById("horas").value);

    let pagamento = (valor * horas);



    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "O pagamento para " + nome + " deve ser " +  pagamento.toFixed(2) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisvalor(){
 var valor = parseFloat(document.getElementById("valor").value);
 var valord = document.getElementById("valor");
 valord.value =valor.toFixed(2)


}
   
   
   


