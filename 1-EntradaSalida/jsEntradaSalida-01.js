/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	var mensajeUno;
	var i;
	var mensajeDos;
	var mensajeTres;
	var flag;
	var mensajeCuatro;
	//var idElement;
	//idElement= document.getElementById('txtIdImporte').value;

	flag = true;
	i=0;
	if (flag = true){
		i = i + 1;
		flag = false;
	}

	
	/*
	
	programa testingCami
areas
  ciudad: AreaC (1, 1, 100, 100)
robots
  robot robot1
  comenzar
    Pos (3, 6)
    repetir 2
      derecha
      mover
  fin
variables
  r_info: robot1
comenzar
  AsignarArea (r_info, ciudad)
  Iniciar (r_info, 1, 1)
fin
*/

	mensajeUno = "estoy aprendiendo de 0";
	mensajeDos = "esto se va a mostrar despues de tocar aceptar";
	mensajeTres = "esto despues de lo de antes, si es que esta puesto en el Alert(case sensitive)";
	mensajeCuatro = "Esto funciona de maravilla";
	console.log(i);

	alert(mensajeUno);
	alert(mensajeDos);
	alert(mensajeTres);
	alert(mensajeCuatro);
}