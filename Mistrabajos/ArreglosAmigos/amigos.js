//Este es la continuidad de mi ejercicio de arreglos
//25 marzo 2020, autor :Nicolas Rivera 

var amigos = ["Santiago", " Alejandro", " Juanita"];
//amigos.lenght que me ayuda a saber cual es el numero de elementos de mi arreglo
document.write("Tienes " + amigos.length + " amigos"+"<br>");
amigos[amigos.length]=" Adriana ";
amigos[amigos.length]=" Brayan";
document.write(amigos); 
// como push agrega un elemnto al final o los elementos que quiero al final
amigos.push(" Milagros"," Aramais"," Brandon");
document.write("<br>"+ amigos);
//borra la posicion 
amigos.pop();
document.write("<br>"+ amigos);

