var d = new Date();
function inicio(){
    
    window.document.getElementById("listaPropiedades")
    .innerHTML=`<table><tr><td>`+navigator.language+`</td></tr>
    <tr><td>`+location.href+`</td></tr>
    <tr><td>`+location.port+`</td></tr>
    <tr><td>`+document.title+`</td></tr>
    <tr><td>`+Math.floor(Math.random() *100)+`</td></tr>
    <tr><td>`+Date().toLocaleDateString+`</td></tr>
    <tr><td>`+location.href+`</td></tr>
    <tr><td>`+Number.MAX_VALUE+`</td></tr>
    <tr><td>`+Number.MIN_VALUE+`</td></tr>
    <tr><td>`+screen.availHeight+`</td></tr>

    </table>`;
    
    }






































/*console.log("éste mensaje se muestra por consola");

var lista;

window.onload = function listaPropiedades() {
    
    const idioma=navigator.language;
    document.getElementById("idioma").innerHTML=lista;
    const url=location.href;
    document.getElementById("url").innerHTML=lista;
    const puerto=location.port;
    document.getElementById("puerto").innerHTML=lista;
    const titulo=document.title;
    document.getElementById("titulo").innerHTML=lista;
    let aleatorio=Math.floor(Math.random()*100+1);
    document.getElementById("random").innerHTML=lista;
    let fecha=new Date().getDay();
    document.getElementById("fecha").innerHTML=lista;
    let horaActual=new Date().getHours();
    document.getElementById("hora").innerHTML=lista;
    const maximo=Math.max();
    document.getElementById("max").innerHTML=lista;
    const minimo=Math.min();
    document.getElementById("min").innerHTML=lista;
    var altura=screen.availHeight;
    document.getElementById("altura").innerHTML=lista;
 
    }
    

  

    

*/
