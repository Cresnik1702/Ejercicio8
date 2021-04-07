// En este ejercicio nos piden que allemos la nota media de una calse
// con 14 niños.

// El pseudocódigo es el siguiente :

//  Proceso notas
	
//  	Definir not Como Real;
//  	Definir i Como Entero;
//  	Definir sum Como Real;
//  	Definir med Como Real;
//  	sum<-1;
	
	
//  	Para i<-1 Hasta 14 Con Paso 1 Hacer
//  		Escribir "Marque la nota del alumno", i;
//  		Leer not;
//  		sum<-sum+not;
//  	FinPara
	
//  	med<-sum/14;
	
//  	Escribir "La media de la clase es", med;
	
//  FinProceso


let notas = 0;
let sumnotas =0;
let media = 0;

    for (let alumno = 0; alumno < 14; alumno++){
        
        notas = parseInt (prompt("Dame la nota del alumno " + alumno));
        console.log ("La nota ingresada del alumno " + alumno + " es: " + notas);
        sumnotas = (sumnotas + notas);
       
    }

media = (sumnotas / 14);
console.log ("La media de todos los alumnos es: " + media);