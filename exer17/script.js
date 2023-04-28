

function exer17(){
    
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    let teste = parseInt(valor2 / valor1 )
    let teste1 = teste * valor1;

    let teste2 = parseInt(valor1 / valor2 )
    let teste22 = teste2 * valor2;

    if(teste1 == valor2 || teste22 == valor1){
        var resposta ="São multiplos"
    }else{
        var resposta ="Não são multiplos"
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  resposta; 
    
    
}