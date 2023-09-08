/* Instrucción: Encontrar ciclos que se puedan aplicar al contexto del Consultorio Dental*/

/* While: Tratamiento de brackets, mientras los dientes están chuecos se sigue el tratamiento.
    1. El objetivo es que no quede ningún diente por alinear durante todo el proceso de tratamiento de brackets.
    2. Se tiene que el paciente tiene cierta cantidad de dientes chuecos.
    3. Se realiza un bucle en el que por cada cita que asista, cada diente chueco se alínea y por ende (disminuye su valor).
 */
    let dientesTotalesPorAlinear = 0;
    let dientesChuecos = 5;
    while(dientesChuecos > dientesTotalesPorAlinear){
        //seguir tomando el tratamiento
        console.log("Sigue asistiendo a tus citas");
        //por cada cita que asista, se alinea un diente
        dientesChuecos--;
    }

/* Do-While: Para cuántas limpiezas limpiezas hay material por día, mientras haya material se hacen limpiezas
    1. Queremos determinar si podemos seguir haciendo limpiezas o no en función del material disponible 2. indicamos en una variable para cuántas limpiezas tenemos material disponible, ya sea que lo
    3. indiquemos directamente en la variable o lo pidamos al usuario hacemos limpiezas mientras no superemos el número de limpiezas ya establecido
*/
let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
let limpiezas = 0;
do{
    //hacer limpieza
    limpiezas++;
    if (limpiezas == limpiezasDisponibles){
        console.log("Última limpieza hecha, se acabó lo que se vendía.");
    }
} while (limpiezas < limpiezasDisponibles);

/* For: Para poder atender a cada paciente, limpiar los utensilios utilizados.
    1. Se tienen 5 utensilios sucios que tienes que limpiar para antes de cerrar el consultorio.
    2. Si el número de utensilios es mayor a 0.
    3. Por cada iteración se tiene que decrementar hasta que no quede ninguno sucio.
 */
    function checarUtensilios(){
        for(var utensiliosSucios = 5; utensiliosSucios > 0; utensiliosSucios--){
            console.log("Esperando a que se limpien " + utensiliosSucios + " utensilios sucios…");  
        }
        console.log("Ya no quedan más por limpiar");
    }
    
    checarUtensilios();
   
    
/* Instrucción: Encontrar ciclos que se puedan aplicar al contexto del Proyecto integrador*/

/* while:Si la publicación tiene artículos disponibles, mantener publicación activa hasta que se agoten.
    1. Se obtiene un stock disponible de 10 rascadores.
    2. Se obtiene un pedido de 0 rascadores, por lo cual la publicación se mantendrá activa hasta que se agoten.
 */
let rascadorActual = 0;
let rascadorDisponible = 10;
while(rascadorDisponible > rascadorActual){
    console.log ("Producto actualmente disponible");
    rascadorDisponible--;
}

/* do-while: mostrar cuántos productos tiene en su carrito mientras sigue comprando
    1.Queremos saber mostrar el carrito de compras y cuántos artículos tiene el carrito
    2. Inicializamos artículos en 0 y una variable bandera para saber si el cliente quiere seguir comprando.
    3. Aumentamos el número de artículos en 1 cada que el usuario indica que sí quiere seguir comprando y mostramos cuantos artículos tiene en su carrito.
 */
    let articulos = 0;
    let seguirComprando = true
    do{
        articulos ++;
        console.log("Estás comprando, tienes " + articulos + " en tu carrito");
        seguirComprando = confirm("Quieres seguir comprando?");
    } while (seguirComprando);

/* for: Si un vendedor tiene 10 ventas muestra una insignia de “vendedor destacado”
    1. Para el vendedor, se tienen 0 ventas al ingresar por primera vez a la plataforma.
    2. Se le notificará que aún no es apto para ser vendedor destacado.
    3. Al llegar a la cantidad de 10 ventas actuales se le mostrará un aviso de que ha llegado a ser un vendedor destacado.
 */
for (let ventasActuales = 0; ventasActuales <10; ventasActuales++) {
	console.log("Tienes " + ventasActuales + " actualmente, continúa así para ser vendedor destacado");
} console.log("Felicidades, has obtenido la insignia de vendedor destacado");
