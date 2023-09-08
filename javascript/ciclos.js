/*
Condiciones alteran el orden natural del código
Estructuras de control controlan la ejecución del código

Ciclos o bucles (loops): son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida hasta que se cumpla una condición específica.
Es importante usar ciclos para automatizar tareas repetitivas.

En JS existen los siguientes ciclos:
- while
- do while
- for


Iteración: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles

*/

/*While ejecuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. La condición se evalua antes de cada iteración

 while (condicion) {
    //codigo que se ejecuta
 }
 */

 /*while (miCrushMeQuiere){
    console.log ("Seré feliz")
 }
 */

 /*Analogía: Seguir una receta para preparar sopa
 Lista de ingredientes:
 zanahoria
 papitas
 chayote
 limon
 agua
 espinaca


 vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles

 paramos cuando ya no tengamos ingredientes
 
 */


 //ejemplo consultorio dental

 let capacidadPacientes = 50;
 let pacientesEnConsultorio = 15;

 //mientras 15 sea menor que 50
 while (pacientesEnConsultorio < capacidadPacientes){
    //seguiré dando servicio
    console.log ("Seguimos dando servicio")
    //aumento en uno mis pacientes
    pacientesEnConsultorio++
 } 
//Mientras sea verdadero, se ejecuta la instrucción (pide permiso para ir a la fiesta si no lo tiene no va)



 /* Do while
 Se ejecuta la instrucción mientras sea verdadero (pide perdon por ir a la fiesta sin pedir permiso)

Do while se diferencía del while ya que aquí se ejecuta la instrucción al menos una vez y luego se pregunta para saber si se sigue ejecutando o no.

 do{
    //codigo a ejecutar
 } while (condicion);


 Analogía: preparamos un pastel

 */


 //Ejemplo de consultorio, registro de paciente

 var contadorPacientes = 0;

 do {
    var nombre = prompt ("Ingresa nombre del paciente");
    if (nombre){
        contadorPacientes++;
    } 
 } while (contadorPacientes<15 && confirm("Quieres registrar otro paciente?"));

 console.log ("Número total de pacientes", contadorPacientes);


 /*For: se utiliza cuando conocemos el número exacto de iteraciones que vamos a realizar
 Consiste de tres partes fundamentales:
 -inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inciio)
 -condición: es el detonante que verificamos antes de cada ciclo para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
 -expresión de iteración (contador): tiene la finalidad de poder modificar la variable de inicio y poder tener un punto de cierre.
 
 for (inicializacion; condicion;expresion de iteracion){
    //bloque de código a ejecutar
 }
 */

//Crea un código que imprima los números del 0 al 4
for (var valorInicial=0; valorInicial<5; valorInicial++){
    console.log(valorInicial);
}

//Version más comercial
for (var i=0; i<5; i++){
    console.log(i);
}


//Ejemplo consultorio dental: registro de citas en un día
let cantidadCitasDiarias = 5;

for (let i = 1; i <= cantidadCitasDiarias; i++) {
    var nombre = prompt ("Ingrese nombre del paciente" + i);
    console.log("Paciente con cita" + nombre + i);
}



