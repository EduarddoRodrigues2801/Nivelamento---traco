

function exer11(){
    
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let final = (nota1 + nota2)

    if(final >= 60){
        var resnota = " "
    }else{
     var resnota = "REPROVADO"
    }
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Primeiro Nota: "+ nota1.toFixed(1) + " Segundo nota: " + nota2.toFixed(1) +" Nota final: " + final.toFixed(1) +" " + resnota;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisnota1(){
    var nota1 = parseFloat(document.getElementById("xxxnota1").value);
    var nota1d = document.getElementById("xxxnota1");
    nota1d.value =nota1.toFixed(1)
    
   }
   
function decimaisnota2(){
    var nota2 = parseFloat(document.getElementById("xxxnota2").value);
    var nota2d = document.getElementById("xxxnota2");
    nota2d.value =nota2.toFixed(1)
    
   }