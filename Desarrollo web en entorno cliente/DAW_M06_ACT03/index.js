/*1.Crea una clase para estructurar la información de una serie de televisión guardando su título, la temática, array con los nombres  
de los principales actores. También ha de guardar el actor favorito guardando el número de actor correspondiente en el array de actores.
*/
class SerieTV {
    constructor (titulo, tematica, actoresPrincipales){
        this.titulo=titulo;
        this.tematica=tematica;
        this.actores=actoresPrincipales;
        this.actorAleatorio='';

/*2.Añade a la clase Serie una función generaActorFavorito() 
que establezca como número de actor favorito un número aleatorio del total de actores que tenga.
*/    
        this.generaActorFavorito = function(){
            const long = actoresPrincipales.length;
            const calc = Math.floor(Math.random()*(long));
            this.actorAleatorio = calc;
        }
        
    }
}
/*3.Crea inicialmente 3 series, la primera con 2 actores, la segunda con 3 actores y la tercera con 4 actores. 
Al inicializar cada objeto correspondiente a una serie llama a la función " generaActorFavorito ()" 
para establecer inicialmente un actor favorito. Añade las series a un array “total_series”.
*/
let show01= new SerieTV('Dexter ',  'Drama ', ['Michael C Hall ' ,'Jennifer Carpenter']);
show01.generaActorFavorito();

let show02 = new SerieTV('Samurai Gourmet' ,  'Cocina' ,  ['Naoto Takenaka' ,'Tetsuji Tamayama' , 'Honami Suzuki '] );
show02.generaActorFavorito();

let show03 = new SerieTV ('Breaking Bad ', 'Drama ', ['Aaron Paul ','Bryan Cranston ', 'RJ Mitte ', 'Anna Gunn ']); 
show03.generaActorFavorito();

console.log("-------------------------");

let total_series = new Array();
total_series.push(show01);
total_series.push(show02);
total_series.push(show03);
console.log(total_series);

console.log("-------------------------");
/*4. Añade al HTML un botón “MUESTRA SERIES” que al clicarlo muestre la información de todas las series dentro del array " total_series ". 
Debe mostrar por cada serie el título, la temática el número y nombre de actor favorito, y el listado de actores de la serie. 
*/
function muestraArray(){

    let contenido="";

    total_series.forEach((serie, posicion) => {

        contenido +="<div id=d"+posicion+"> <b>Titulo: </b>"+serie.titulo+"<br /> <b>Temática: </b>"+serie.tematica+" <br /> <b>Actor Favorito:</b> "+serie.actores[serie.actorAleatorio]+" <br />";
        contenido +=" <b>Actores:</b>" 
        
        serie.actores.forEach((actor, indiceActor)=>{
            contenido += actor + " <button onClick='borrarActor(" + posicion + "," + indiceActor +")'>X</button> <br />"
        });

        contenido+= "<br /><button onclick='borrarSerie(" + posicion +")'> Borrar serie </button><br /><br />";
        
    });
    document.getElementById("resultado").innerHTML = contenido;
}
/*5. Permite añadir una nueva serie (con el array de actores vacío) a partir de un input para el título, 
un input para la temática y un botón para añadir la serie. Una vez añadida actualiza el array de series.
*/
function addSerie(){

    event.preventDefault();

    const title = document.getElementById("addTitulo").value; 
    const thematic = document.getElementById("addTematica").value;

    const nuevaSerie = new SerieTV (title, thematic, [] );
    total_series.push(nuevaSerie);
    console.log(total_series);

    muestraArray();
    document.getElementById("addTitulo").value = "";
    document.getElementById("addTematica").value ="";
}
/*6. Modifica el código que muestra las series para añadir a cada 
serie un botón que al clicarlo borre la serie correspondiente.
*/
function borrarSerie(propiedad){
    total_series.splice(propiedad, 1);
    muestraArray();
}
/*7.Modifica el código que muestra las series para añadir para cada 
actor un botón que al clicarlo borre el actor correspondiente.
*/
function borrarActor (indiceSerie, actorABorrar){
    total_series[indiceSerie].actores.splice(actorABorrar, 1);
    muestraArray();
}
var myArray2 = new Array(3,2)
console.log(myArray2);