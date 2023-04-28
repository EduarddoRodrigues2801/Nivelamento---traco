

function exer24(){

  let v1 = parseFloat(document.getElementById("valorv1").value);
  let v2 = parseFloat(document.getElementById("valorv2").value);
  let v3 = parseFloat(document.getElementById("valorv3").value);
  let v4 = parseFloat(document.getElementById("valorv4").value);
  let v5 = parseFloat(document.getElementById("valorv5").value);
 let arr = [v1,v2,v3,v4,v5];

 arr.sort();

 let resultado = document.getElementById("conteudoresultado");
  resultado.innerHTML = arr;


}

  function novo(){
    document.location.reload(true);

}

