

function exer03(){
    let nome1 = document.getElementById("nome1").value;
    let idade1 = parseFloat(document.getElementById("idade1").value);
    let nome2 = document.getElementById("nome2").value;
    let idade2 = parseFloat(document.getElementById("idade2").value);

    let media = (idade1 + idade2)/2
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Nome1: " + nome1+ "<br>Idade1: " + idade1 +"<br>Nome2: " + nome2 + "<br>Idade2: " + idade2 + "<br>A idade média de  "+ nome1 +" e "+ nome2 +" é de "+ media.toFixed(1)+" anos" ;
    
    
}

