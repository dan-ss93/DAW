//Ex. 2
function inicio(){
    
    window.document.getElementById("listaPropiedades")
    .innerHTML=`<table><tr><td>`+navigator.language+`</td></tr>
    <tr><td>`+location.href+`</td></tr>
    <tr><td>`+location.port+`</td></tr>
    <tr><td>`+document.title+`</td></tr>
    <tr><td>`+Math.floor(Math.random() *100)+`</td></tr>
    <tr><td>`+(new Date().toLocaleDateString())+`</td></tr>
    <tr><td>`+(new Date().toLocaleTimeString())+`</td></tr>
    <tr><td>`+Number.MAX_VALUE+`</td></tr>
    <tr><td>`+Number.MIN_VALUE+`</td></tr>
    <tr><td>`+screen.availHeight+`</td></tr>

    </table>`;
    
    }

//Ex. 3
function input_titulo () {
    document.cookie = document.getElementById("input_titulo").value;
    //alert(document.cookie); 
    }

//Ex. 4

window.onload = cuentaAtras;
var segundos = 5;

    function cuentaAtras() {
    document.getElementById('countdown').innerHTML = segundos;

    if(segundos==0){
    window.open("numero.html", "", "height=300, width=300");

}else{
segundos-=1;
setTimeout("cuentaAtras()",1000);
}
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
