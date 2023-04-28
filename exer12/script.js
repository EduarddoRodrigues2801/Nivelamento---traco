

function exer12(){
    
    let cof1 = parseFloat(document.getElementById("cof1").value);
    let cof2 = parseFloat(document.getElementById("cof2").value);
    let cof3 = parseFloat(document.getElementById("cof3").value);
    
    let delta = Math.sqrt((cof2 * cof2) - (4 * cof1 * cof3))
    let base = 2 * cof1
    let raiz1 = (-(cof2) + delta)/base
    let raiz2 = (-(cof2) - delta)/base

    if (delta >= 0 ){
        var result = " X1= " + raiz1 + "   X2= " + raiz2
        
    }else{
        var result = " Está equação não possui Raízes"
    }
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  result; 
    
    
}