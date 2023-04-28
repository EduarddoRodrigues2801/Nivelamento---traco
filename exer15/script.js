

function exer15(){
    
    let glicose = parseFloat(document.getElementById("glicose").value);
   
    if(glicose <= 100 ){
        var classificacao ="Classificação: Normal";
    }else if(glicose <= 140){
        var classificacao ="Classificação: Elevado";
    }else{
        var classificacao ="Classificação: Diabetes";
    }
 

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  classificacao; 
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisglicose(){
    var glicose = parseFloat(document.getElementById("glicose").value);
    var glicosed = document.getElementById("glicose");
    glicosed.value =glicose.toFixed(2)
      
   }
   function decimaisvalor(){
    var valor = parseFloat(document.getElementById("valor").value);
    var valord = document.getElementById("valor");
    valord.value =valor.toFixed(2)
      
   }