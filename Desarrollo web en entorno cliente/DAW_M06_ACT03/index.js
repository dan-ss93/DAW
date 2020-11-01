/*1.Crea una clase para estructurar la información de una serie de televisión guardando su título, la temática, array con los nombres  
de los principales actores. También ha de guardar el actor favorito guardando el número de actor correspondiente en el array de actores.
*/
class SerieTV {
    constructor (titulo, tematica, actoresPrincipales){
        var arrayActores = new Array();
        this.titulo=titulo;
        this.tematica=tematica;
        this.actores=actoresPrincipales;

/*2.Añade a la clase Serie una función generaActorFavorito() 
que establezca como número de actor favorito un número aleatorio del total de actores que tenga.
*/
    
        this.generaActorFavorito = function(){
            var long = actoresPrincipales.length;
            let calc = Math.floor(Math.random()*(long));
           arrayActores = actoresPrincipales[calc];
           console.log(arrayActores);
        }
        
    }
}

/*3.Crea inicialmente 3 series, la primera con 2 actores, la segunda con 3 actores y la tercera con 4 actores. 
Al inicializar cada objeto correspondiente a una serie llama a la función " generaActorFavorito ()" 
para establecer inicialmente un actor favorito. Añade las series a un array “total_series”.
*/
var show01= new SerieTV('Dexter ',  'Drama ', ['Michael C Hall ' ,'Jennifer Carpenter']);
show01.generaActorFavorito();

var show02 = new SerieTV('Samurai Gourmet' ,  'Cocina' ,  ['Naoto Takenaka' ,'Tetsuji Tamayama' , 'Honami Suzuki '] );
show02.generaActorFavorito();

var show03 = new SerieTV ('Breaking Bad ', 'Drama ', ['Aaron Paul ','Bryan Cranston ', 'RJ Mitte ', 'Anna Gunn ']); 
show03.generaActorFavorito();

console.log("-------------------------");

var total_series = new Array();
total_series.push(show01);
total_series.push(show02);
total_series.push(show03);
console.log(total_series);

console.log("-------------------------");

/*4.Añade al HTML un botón “MUESTRA SERIES” que al clicarlo muestre la información de todas las series dentro del array " total_series ". 
Debe mostrar por cada serie el título, la temática el número y nombre de actor favorito, y el listado de actores de la serie. 
*/
function muestraArray(){

    let contenido="";

    total_series.forEach(function(serie, posicion){

    contenido += "<div id=d"+posicion+">Titulo: "+serie[0]+"<br> Tematica: "+serie[1]+" <br> Actor Favorito: "+serie[3]+" <br> Actores: "+serie[2]+" <br><br>";

    });
    document.getElementById("resultado").innerHTML = contenido;


}