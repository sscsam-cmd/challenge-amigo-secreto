let lista = [];

function agregarAmigo() {
    let userAmigo = document.getElementById('amigo').value; 
    userAmigo = userAmigo.trim();   // Eliminar espacios en blanco
    
    if (!validarEntrada(userAmigo)) {   // No continuar si validación falla
        return;
    }

    if (lista.includes(userAmigo)) {    // Evitar nombres duplicados  
        alert('Este nombre ya fue agregado');
        return;
    }

    lista.push(userAmigo);      // Agregar amigo a la lista
    visualizarLista(userAmigo);
    limpiarCaja();
}

function validarEntrada(amigo) {
    if(amigo == ''){
        alert('Ingresa un valor válido');
        return false;
    }
    return true;
}

function visualizarLista(amigo) {
    let listaAmigos = document.getElementById('listaAmigos');
    let newAmigo = document.createElement('li'); // Crear elemento <li>
    
    newAmigo.textContent = amigo;       // Contenido del elemento
    newAmigo.classList.add('nombre-item');

    // Agregar botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '❌';
    botonEliminar.classList.add('boton-eliminar');

    botonEliminar.onclick = function(){
        listaAmigos.removeChild(newAmigo);                  // Eliminar elemento
        lista = lista.filter(nombre => (nombre != amigo));  // Quitar de la lista
    }

    newAmigo.appendChild(botonEliminar);
    listaAmigos.appendChild(newAmigo);  // Agregar elemento a lista
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    let amigoSeleccionado = lista[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
    
    borrarElementosLi();
    vaciarLista();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function borrarElementosLi() {
    document.getElementById('listaAmigos').innerHTML = '';  // Borrar los <li>
}

function borrarResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function vaciarLista() {
    lista = [];
}

function condicionesIniciales() {
    vaciarLista();          // Lista vacia
    limpiarCaja();          // Input vacio
    borrarElementosLi();    // Borrar elementos <li>
    borrarResultado();      // Borrar resultado
}

condicionesIniciales();