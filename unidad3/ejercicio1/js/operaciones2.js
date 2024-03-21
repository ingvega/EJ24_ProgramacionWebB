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
document.addEventListener("DOMContentLoaded",function(evento){
    //Asignar los eventos y precargar configuración (opcional)
    document.getElementById("btnCalcular").addEventListener('click',()=>{
        let txtN1=document.getElementById("txtNum1");
        let txtN2=document.getElementById("txtNum2");
        let n1=parseFloat(document.getElementById("txtNum1").value);
        let n2=parseFloat(document.getElementById("txtNum2").value);
        let cboOperacion=document.getElementById("cboOperacion");
        //Quitar los errores de validación que se añaden manualmente
        txtN2.setCustomValidity("");
        cboOperacion.setCustomValidity("");

        //Colocar la clase validado en el form
        //document.getElementsByTagName("form")[0]
        //asigna el atributo class, de modo que si ya tenía más clases, las reemplaza
        //document.querySelector("form").className="validado";

        //asigna el atributo class, de modo que si ya tenía más clases, las reemplaza
        document.querySelector("form").classList.add("validado");
        debugger;
        let detalle;
        if(cboOperacion.value) {
            if(cboOperacion.value=="4" && 
                txtN2.value==0){
                    //Añade un mensaje de error (como los de la validación de HTML)
                    //cuando el numero 2 sea cero y se haya indicado la operación de división
                    txtN2.setCustomValidity("Valor no válido para la división");
                    return;
            }
            //detalle=n1+' '+cboOperacion.value+' '+n2;
            //Comillas mágicas
            detalle=`${n1} ${cboOperacion.value} ${n2}`;
        }else{
            //alert("Indica la operación");
            cboOperacion.setCustomValidity("Indica la operación");
            return;
        }
        let resultado=eval(detalle);
        document.querySelector("#tblHistorial tbody").innerHTML+=
            `<tr><td>Operacion</td><td>${detalle}</td><td>${resultado}</td></tr>`; 
        //ejecuta el código con y sin la siguiente línea y verifica qué pasa
        evento.preventDefault();
    });
});