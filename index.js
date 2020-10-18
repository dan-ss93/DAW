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
    console.log(document.cookie); //Para corroborar la cookie
}

//Ex. 4

window.onload = cuentaAtras;
    var segundos = 5;

    function cuentaAtras() {

    document.getElementById('countdown').innerHTML = segundos;

    if(segundos==0){
    window.open("numero.html","","height=300,width=300,top=400,left=-1100","menubar=0");

    }else{
    segundos-=1;
    setTimeout("cuentaAtras()",1000);
    }
}



