let btnRestar=document.getElementById("btnRestar");
btnRestar.onclick=restar;
let btnMultiplicacion=document.getElementById("btnMultiplicar");
btnMultiplicacion.addEventListener("click",multiplicar);
let btnDivision=document.getElementById("btnDividir");
//btnDivision.addEventListener("click",function(){
btnDivision.addEventListener("click",args=>{
    //console.log(this);
    //console.log(args);
    ocultar(args.target);
    //Obtener los valores de las cajas
    let n1=parseFloat(document.getElementById("txtNum1").value);
    let n2=parseFloat(document.getElementById("txtNum2").value);
    resultado=n1/n2;
    //document.getElementById("resultado").innerText="<b>"+resultado+ "</b>";
    document.getElementById("resultado").innerHTML="<b>"+resultado+ "</b>";
});

function sumar(args){
    //ocultar(document.getElementById("btnSumar"));
    //console.log(this);
    //console.log(args);
    ocultar(args);
    //Obtener los valores de las cajas
    let n1=parseFloat(document.getElementById("txtNum1").value);
    let n2=parseFloat(document.getElementById("txtNum2").value);
    resultado=n1+n2;
    //document.getElementById("resultado").innerText="<b>"+resultado+ "</b>";
    document.getElementById("resultado").innerHTML="<b>"+resultado+ "</b>";
}

function restar(args){
    /*console.log(this);
    console.log(args);*/
    ocultar(args.target);
    //Obtener los valores de las cajas
    let n1=parseFloat(document.getElementById("txtNum1").value);
    let n2=parseFloat(document.getElementById("txtNum2").value);
    resultado=n1-n2;
    //document.getElementById("resultado").innerText="<b>"+resultado+ "</b>";
    document.getElementById("resultado").innerHTML="<b>"+resultado+ "</b>";
}

function multiplicar(args){
    //console.log(this);
    //console.log(args);
    ocultar(args.target);
    //Obtener los valores de las cajas
    let n1=parseFloat(document.getElementById("txtNum1").value);
    let n2=parseFloat(document.getElementById("txtNum2").value);
    resultado=n1*n2;
    //document.getElementById("resultado").innerText="<b>"+resultado+ "</b>";
    document.getElementById("resultado").innerHTML="<b>"+resultado+ "</b>";
}

function ocultar(btn){
    //btn.disabled=true;
    //btn.style.display='none';
    //btn.remove();
    btn.style.backgroundColor='blue';
}