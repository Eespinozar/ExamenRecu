
function mostrar()
{/*Nombre edad (validar)
	sexo (masculino - femenino - no binario)
	puesto (programador - analista - Qa)
	sueldo (entre 15000 y 70000)
	La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
	a) promedio de sueldos para cada puesto
	b) el sexo del que percibe el mayor sueldo
	c) el nombre del empleado femenino con mas sueldo
	d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
	alert("Ejercicio 1");*/



let sexo;
let puesto;
let sueldo;
let edad;
let seguir;
let acumFemenino;
let contFemenino;
let contNoBin;
let acumNoBin;
let acumMasculino;
let contMasculino;
let acumProgramador;
let contProgramador;
let acumAnalista;
let contAnalista;
let acumQa;
let contQa; 
let promedioAnalista;
let promedioProgramador;
let promedioQa;
let mayorSueldoFemenino; 
let mayorSueldo;
	do{
	  nombre = prompt("Ingrese su nombre:");
	  
	  sexo = prompt ( "Ingrese sexo masculino/ femenino/no  binario ");
	  while ( sexo != "masculino" || sexo != "femenino" || sexo != "no binario" );{ 
	  sexo = prompt ( "Error");}
	
	  puesto = prompt ( "Ingrese puesto programador/ analista / Qa ");
	  while ( puesto != "programador" || puesto != "analista" || puesto != "Qa" );{ 
	  sexo = prompt ( "Error");}


	  edad  = prompt("Ingrese edad");
	  while ( edad >= 18 && edad <65);{ 
	  edad = prompt ( "Eror ingrese una edad entre 18 y 65 años.");}


	  sueldo = prompt ( "Ingrese sueldo entre 15000 y 70000");
	  while ( sueldo >= 15000 && sueldo <= 70000);{ 
	  sueldo = prompt ( "Error ingrese sueldo valido ");}


	  
	 

	 if ( puesto == "programador"){
		acumProgramador+= sueldo;
		contProgramador++;
		}  
		else if ( producto == "analista") {
		acumAnalista+= sueldo;
		contAnalista ++;
		} 
		else ( producto == "Qa");{
		acumQa += sueldo;
		contQa ++;
		}

		if ( sexo == "femenino"){
			acumFemenino+= sexo;
			contFemenino++;
			}  
			else if ( sexo == "masculino") {
			acumMasculino+= sexo;
			contMasculino++;
			} 
			else ( sexo == "no binario");{
			acumNoBin += sexo;
		    contNoBin ++;
			}
	
		if (acumAnalista > acumProgramador && acumAnalista > acumQa ){

			mayorSueldo = "analista";}
			
			else if ( acumProgramador >= acumAnalista && acumProgramador > acumQa){
			
			  mayorSueldo = "programador";
			}
			else{ mayorSueldo = "Qa";}

			
			if (sexo == "femenino" && mayorSueldo  ){

				mayorSueldoFemenino = mayorSueldo
			}

			if( sexo == "masculino"|| sexo == "femenino" || sexo || "no  binario"){

				else if ( sexo == mayorSueldo)
			}



	if (sexo= "femenino")
	if ( contProgramador != 0){
		promedioProgramador = acumProgramador / contProgramador;
	  }
	  
	  if ( contAnalista!= 0){
	  
		promedioAnalista = acumAnalista / contAnalista;
	  }
	  if ( contQ != 0){
	  
		promedioQa = acumQa / contQa;
	  }
	  seguir = prompt( "Quiere Ingresar otro alunmo");
	  while ( seguir == 's'); 
 

	

console.log ("A- El promedio de Sueldos para cada puesto es " + promedioQa + promedioProgramador + promedioAnalista);
console. log ( "Mayor femenino es" + mayorSueldoFemenino)
	

































}