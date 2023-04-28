

function exer20(){
    let inicial = parseFloat(document.getElementById("inicio").value);
    let final = parseFloat(document.getElementById("final").value);

    
    let resultado = document.getElementById("conteudoresultado");
    var soma = 0 ;
        
    for (i = inicial; i<= final; i++ ){
        var acumulador = 0
        var soma = soma + i
        resultado.innerHTML = "Resultado: "+soma ; 
     }
    
    
    
}

function novo(){
    document.location.reload(true);

}
