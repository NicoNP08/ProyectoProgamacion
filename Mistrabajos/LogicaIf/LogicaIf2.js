var A,B,C,D,E,F;
var correcto=true;
//Condiciones
alert("Bienvenido al juego, tienes que salvar a los tres, teniendo en cuenta que si el perro se queda con el niño lo muerde y si se queda con el gato se lo come "); 
while(correcto==true){
	B = parseInt (prompt("A quien deseas bajar primero 1 = Perro, 2 = Niño, 3 = Gato "));
		if(B == 1){
			
			A = parseInt (prompt("Que deseas hacer con el perro 1 = Dejarlo en las escaleras, 2 = Bajarlo del edifio"));
			if(A == 1){
				alert("Dejaste al perro en la escalera ");
				C = parseInt(prompt("A quien deseas bajar 1 = Gato, 2 = Niño"));
				if(C == 1){
					alert("Bajaste al gato ");
					D = parseInt(prompt("Que deseas hacer 1 = Subir al perro, 2 = Bajar al niño"));
					if(D == 1){
						alert("Sube al perro y lo deja arriba ");

						E = parseInt(prompt("Que deseas hacer 1 = Bajar al niño, 2 = Bajar al perro"));
						if(E== 1){
							alert("Baja el niño ");

							F = parseInt(prompt("Que deseas hacer 1 = Bajar al perro, 2 = Dejar al perro arriba"));
							if(F == 1){
								alert("Bajaste al perro");	
								alert("¡Genial! ¡Salvaste a los 3 del edifio en llamas! ¡Ganaste!");
								correcto=false;
							}
							else if(F == 2){
								alert("El perro muere en llamas agonizando de dolor");
							}
							else{
								alert("Te equivocaste, mataste al perro");
							}
						}
						else if(E==2){
							alert("El perro se come al gato mientras vas por el niño");
						}
						else{
							alert("Te equivocaste el perro se ceno al gato");
						}
					}
					else if(D == 2){
						alert("El perro persigue su cola y se quema por las llamas");
					}
					else{
						alert("Te equivocaste dejaste que el perro se volviera carbon");
					}
				}
				else if(C==2){
					alert("El gato se duerme y se quema");
				}
				else{
					alert("Te equivocaste no ayudaste al gato obeso");
				}
			}
			else if(A==2){
				alert("Dejaste al perro solo en la calle y se lo robaron");
			}
			else{
				alert("Te equivocaste la dueña del perro te mato");
			}
		}
		else if(B==2){
			alert("El perro se comera al gato");
		}
		else if(B == 3){
			alert("El perro mordera al niño");
		}
		else{
			alert("Te equivocaste, escribiste un numero");
		}
		var retry=parseInt(prompt("Quieres intentarlo denuevo:\n 1. Si\n 2. No"));
        if(retry == 2){
            correcto=false;
            alert("Juego terminado");
        }
        else{
            alert("Continuemos");
        }
	}