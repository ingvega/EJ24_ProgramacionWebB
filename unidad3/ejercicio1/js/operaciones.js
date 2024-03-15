function sumar(){
    //Obtener los valores de las cajas
    let n1=parseFloat(document.getElementById("txtNum1").value);
    let n2=parseFloat(document.getElementById("txtNum2").value);
    resultado=n1+n2;
    //document.getElementById("resultado").innerText="<b>"+resultado+ "</b>";
    document.getElementById("resultado").innerHTML="<b>"+resultado+ "</b>";
}