class SerieTV {
    constructor (titulo, tematica, actoresPrincipales){
        var arrayActores = new Array();
        this.titulo=titulo;
        this.tematica=tematica;
        this.actores=actoresPrincipales;
        
    
        this.generaActorFavorito = function(){
            var long = actoresPrincipales.length;
            let calc = Math.floor(Math.random()*(long));
           arrayActores = actoresPrincipales[calc];
           console.log(arrayActores);
        }
        
    }
}
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

function muestraArray(){
window.document.getElementById("resultado")
.innerHTML=`<table><tr><td>`+total_series[0].titulo +total_series[0].tematica+ total_series[0].actores+total_series[0].actoresPrincipales+`</td></tr>
<tr><td>`+total_series[1].titulo +total_series[1].tematica+ total_series[1].actores+total_series[1].actoresPrincipales+`</td></tr>
<tr><td>`+total_series[2].titulo +total_series[2].tematica+ total_series[2].actores+total_series[2].actoresPrincipales+`</td></tr>
    </table>`;
}
