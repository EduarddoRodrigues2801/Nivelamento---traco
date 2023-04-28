

function exer21(){
    let x = parseFloat(document.getElementById("valorx").value);
   let lista = document.createElement('ul');


for (i =1 ; i <= x ; i++){
    let item = document.createElement('li');
  
   

    if(i % 2 === 0){
        var valor = i;
        let conteudo = document.createTextNode(valor);    
    item.appendChild(conteudo)
    lista.appendChild(item)
    }
}
 let resultado = document.getElementById("conteudoresultado");
   
    resultado.appendChild(lista);
    
}

function novo(){
    document.location.reload(true);

}
