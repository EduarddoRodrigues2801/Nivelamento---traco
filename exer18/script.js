

function exer18(){
    
    let escala = document.getElementById("escala").value;
    let temperatura = parseFloat(document.getElementById("temperatura").value);

    var CF = (temperatura * 1.8) + 32;
    var FC = ((temperatura - 32)/9) *5

    if(escala == "C"){
        var resposta = "A temperatura em Fahrenheit: " + CF.toFixed(2)
    }else if(escala == "F"){
        var resposta = "A temperatura em Celsius: " + FC.toFixed(2)
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = resposta; 
    
}

function novo(){
    document.location.reload(true);

}

function decimaistemperatura(){
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var temperaturad = document.getElementById("temperatura");
  temperaturad.value =temperatura.toFixed(2)
      
   }