/*Asegurar que ya se hayan cargado los elementos a los que se les 
va a asignar algún evento o preconfigurar algún aspecto
*/

/*Asegurar que TODOS los recursos de la ventana (scripts, css, imágenes, 
videos, archivos en general ya se hayan terminado de cargar)*/
//window.onload=function(){};
/*window.addEventListener("load",function(){
    //Asignar los eventos y precargar configuración (opcional)
    this.document.getElementById("btnCalcular").addEventListener('click',()=>{
        
    });
});*/

/*Asegurar que todo el DOM se ha identificado aunque NO TODOS 
los recursos de la ventana (scripts, css, imágenes, 
videos, archivos en general ya se hayan terminado de cargar)*/
document.addEventListener("DOMContentLoaded",function(){
    //Asignar los eventos y precargar configuración (opcional)
    document.getElementById("btnCalcular").addEventListener('click',()=>{
        let n1=parseFloat(document.getElementById("txtNum1").value);
        let n2=parseFloat(document.getElementById("txtNum2").value);
        let cboOperacion=document.getElementById("cboOperacion");
        let detalle;
        if(cboOperacion.value) {
            //detalle=n1+' '+cboOperacion.value+' '+n2;
            //Comillas mágicas
            detalle=`${n1} ${cboOperacion.value} ${n2}`;
        }else{
            alert("Indica la operación");
        }
        let resultado=eval(detalle);
        document.querySelector("#tblHistorial tbody").innerHTML+=
            `<tr><td>Operacion</td><td>${detalle}</td><td>${resultado}</td></tr>`; 
    });
});