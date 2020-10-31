
class SerieTV
  {
  constructor (titulo, tematica, actoresPrincipales)
    {
    this.titulo    = titulo;
    this.tematica = tematica;
    this.actores   = [...actoresPrincipales];
    }
  generaActorFavorito()
    {
    console.log( this.actores[ Math.floor(Math.random()*this.actores.length ) ]);
    }
  }
var show01 = new SerieTV('Dexter',  'Drama', ['Michael C Hall','Jennifer Carpenter']);
var show02 = new SerieTV('Samurai Gourmet',  'Cocina',  ['Naoto Takenaka','Tetsuji Tamayama', 'Honami Suzuki'] );
var show03 = new SerieTV('Breaking Bad', 'Drama', ['Aaron Paul','Bryan Cranston', 'RJ Mitte', 'Anna Gunn']);
 
show01.generaActorFavorito();
show02.generaActorFavorito();
show03.generaActorFavorito();
