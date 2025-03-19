// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Set es muy parecido a un arreglo en Java Script, pero no permite valores repetidos
//En mi caso lo usare para evitar que el nombre de algun amigo se repita
let amigos = new Set(); 

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //Recupera el elemnto de un input
    let nombre = inputAmigo.value.trim(); //Elimina espacios bacios al inicio y al final del texto
    
    //Verificar que no existan valores nullos 
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Verifica que no existan nombres repetidos 
    if (amigos.has(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.add(nombre); //Se agrega el nombre al set 
    agregarElementoLista(nombre);//Se incluye el nombre en la lista de elementos con la funcion AgregarElemento
    inputAmigo.value = ""; //Se utiliza para limpiar la entrada del input 
}

function agregarElementoLista(nombre) {
    let lista = document.getElementById("listaAmigos"); //Busca la lista de amigios del doc html
    let li = document.createElement("li");// crea un nuevo elemento en la lista de amigos
    li.textContent = nombre; //Le indicamos el argumento que se va a crear el el nuevo elemeento de la lista
    lista.appendChild(li);//Agrega dentro del elemento el argumento que le indicamos <li>nombre<li>
}

function sortearAmigo() {
    //No permirte hacer el sorteo si el valor de la lista es nulo 
    if (amigos.size === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo.");
        return;
    }

    let amigosArray = Array.from(amigos); //Convierte set en un arreglo 
    let indiceAleatorio = Math.floor(Math.random() * amigosArray.length); //Multiplicamos un numero alaeatorio por la cantida de elemntos 
    let amigoSorteado = amigosArray[indiceAleatorio]; //Sleeccionamos un elemento aleatorio 

    let resultado = document.getElementById("resultado");
    resultado.textContent = ` Amigo sorteado: ${amigoSorteado} `; //Le indicamos el argumento que debe mostrar que es la posicion del numero random
}


