

function exer10(){
    
    let primeiro = parseFloat(document.getElementById("primeiro").value);
    let segundo = parseFloat(document.getElementById("segundo").value);
    let terceiro = parseFloat(document.getElementById("terceiro").value);
    

if (primeiro <= segundo && primeiro <= terceiro){
   var menor = primeiro;

}else if(segundo <= primeiro && segundo <= terceiro){
    var menor = segundo;
}else{
    var menor = terceiro;
}
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Primeiro Valor: "+ primeiro + " Segundo valor: " + segundo +" Terceiro valor: " + terceiro +"<br> O menor é " + menor;
    
    
}

function novo(){
    document.location.reload(true);

}