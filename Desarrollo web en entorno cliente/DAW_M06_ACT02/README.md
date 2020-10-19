1.	Crea una nueva carpeta de nombre DAW_M06_ACT02 en tu área de trabajo de Visual Studio Code. Dentro crea un nuevo documento  HTML con el nombre “index.html” y un nuevo JS con el nombre “index.js”.  Vincula el HTML con el JavaScript.
2.	Dentro de index.html añade un div con id “listaPropiedades”. Utiliza la función onload de window para que una vez cargado todo el HTML se llame a una función que cree dentro de “listaPropiedades” una lista ordenada HTML ( <OL> <LI></LI> .... </OL>) como la mostrada a continuación pero a añadiendo los valores correspondientes  obtenidos de los métodos de los objetos predefinidos en JavaScript:
1.	Lengua predefinida en el navegador
2.	URL de la página web :
3.	Puerto de la URL:
4.	Título de la página web:
5.	Un valor aleatorio entre 50 y 100 (utiliza el objeto Math):
6.	La fecha actual es (formato dd-mm-yy): 
7.	La hora actual es (formato hh:mm) : 
8.	Valor máximo que puede tener un número en JavaScript :
9.	Valor mínimo que puede tener un número en JavaScript :
10.	Altura total de la pantalla:

3.	Añade al HTML un input con id="input_titulo" y un botón con el texto “SAVE COOKIE”
a.	al clicar en el botón establece como valor de la cookie “titulo_web” el texto introducido por el usuario dentro del input. 
b.	al cargar la página el valor del input con id “input_titulo” ha de ser el valor guardado en la cookie “titulo_web”.
4.	Añade al HTML un botón con el texto “COUNTWDOWN”.
a.	 Al clicar en el botón muestra en index.html una cuenta atrás desde el 5 hasta el 0 que se actualice cada segundo. 
b.	Al llegar la cuenta atrás a 0, se debe detener la cuenta atrás y abrir una nueva ventana de nombre “numero.html” asociada con un JS de nombre “numero.js”. La nueva ventana ha de ser de 300x300px, sin barra de menús y situada en medio de la pantalla. 
5.	Una vez cargada la ventana numero.html:
a.	el título numero.html debe  de ser el valor de la cookie .
b.	 numero.htm debe mostrar un número aleatorio entre 0 y 10 (ambos incluidos) 
6.	Añade a numero.html un input y un botón con el texto “ACIERTA NUMERO”.
a.	programa en “numero.js” que al clicar sobre el botón se muestre en “numero.html” y en “index.html” un mensaje indicando si el valor dentro del input es mayor, menor o igual al número aleatorio generado anteriormente. 
b.	cuando el usuario acierte, cierra“numero.html”.
