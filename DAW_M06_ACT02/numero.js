//Ex. 5

function aleatorio(){
random1 = Math.floor(Math.random() *10);
window.document.getElementById("resultado").innerHTML=random1;
console.log(random1);
}

//Ex. 6

function aciertaNumero(){
    numero =document.getElementById("acertar").value;
    console.log(random1,numero);

if (random1==numero){
    window.document.getElementById("acierta").innerHTML="Has acertado.";
    window.close(),3000;


}else if (random1>numero){
    window.document.getElementById("acierta").innerHTML="El número aleatorio es mayor.";
}else if (random1<numero){
    window.document.getElementById("acierta").innerHTML="El número aleatorio es menor.";
}

}


