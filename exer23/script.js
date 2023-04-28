

function exer23(){

    let x = parseFloat(document.getElementById("valorx").value);
    let y = parseFloat(document.getElementById("valory").value);
   let contador = x;
    let final = y - x;
    var soma = 0;
    while (contador < y) {
        let impar = (contador % 2);
        if (impar === 1){
            soma = soma + contador;
          
        }
       
        
        contador = contador + 1; 
      }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Resultado: " + soma;


}