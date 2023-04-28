

function exer16(){
    
    let primeiro = parseFloat(document.getElementById("primeiro").value);
    let segundo = parseFloat(document.getElementById("segundo").value);
    let terceiro = parseFloat(document.getElementById("terceiro").value);
    

if (primeiro => segundo && primeiro <= terceiro){
   var maior = primeiro;

}else if(segundo => primeiro && segundo <= terceiro){
    var maior = segundo;
}else{
    var maior = terceiro;
}
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Primeiro valor: "+ primeiro + " Segundo valor: " + segundo +" Terceiro valor: " + terceiro +"<br> O maior é " + maior;
    
    
}

function novo(){
    document.location.reload(true);

}