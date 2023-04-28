

function exer08(){
    
    let meda = parseFloat(document.getElementById("meda").value);
    let medb = parseFloat(document.getElementById("medb").value);
    let medc = parseFloat(document.getElementById("medc").value);

    let quadrado  = (meda * meda)
    let triangulo = (medb * meda)/2
    let trapezio = ((meda + medb)*medc)/2

    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área do Quadrado " + quadrado.toFixed(4) + "Área do  Triangulo " + triangulo.toFixed(4) + "Área do Trapézio " + trapezio.toFixed(4);
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaismeda(){
 var medidaa = parseFloat(document.getElementById("meda").value);
 var medidaad = document.getElementById("meda");
 medidaad.value =medidaa.toFixed(1)
 
}

function decimaismedb(){
    var medidb = parseFloat(document.getElementById("medb").value);
    var medidbd = document.getElementById("medb");
    medidbd.value =medidb.toFixed(1)
    
   }
   function decimaismedc(){
    var medidc = parseFloat(document.getElementById("medc").value);
    var medidcd = document.getElementById("medc");
    medidcd.value =medidc.toFixed(1)
    
   }