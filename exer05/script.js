

function exer05(){
    let raio = parseFloat(document.getElementById("raio").value);
   const pi = 3.14159
    

    let area = (2* pi)*raio;
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área = : " + area.toFixed(3) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisraio(){
 var raio = parseFloat(document.getElementById("raio").value);
 var raiod = document.getElementById("raio");
 raiod.value =raio.toFixed(1)


}
   
   


