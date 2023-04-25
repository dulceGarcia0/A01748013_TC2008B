

function primerCar(cadena){
  // Convertir la cadena en un objeto con el conteo de cada caracter
  const conteo = {};

  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i];
    conteo[caracter] = (conteo[caracter] || 0) + 1;
  }
  
  // Buscar el primer caracter que tiene conteo 1
  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i];
    if (conteo[caracter] === 1) {
      return caracter;
    }
  }
}


function bubbleSort(lista) {
    // Longitud de lista
    const long = lista.length;
    
    // Iterar por cada elemento de la lista
    for (let i = 0; i < long; i++) {
      // Iterar por cada elemento de la lista a partir de i+1 
      for (let j = i + 1; j < long; j++) {
        // Si el elemento en j es menor que el elemento en i, intercambiarlos por todo el arreglo
        if (lista[j] < lista[i]) {
          const temp = lista[i];
          lista[i] = lista[j];
          lista[j] = temp;
        }
      }
    }
    // Devolver la lista ordenada
    return lista;
}



function reverseLst(lista){
    let longitud = lista.length;
    let listVacia = [];

    for (let i = longitud - 1; i >= 0; i--) {
        listVacia.push(lista[i]);
    }

    return listVacia;
}


function upperCase(oracion){

    const palabras = oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
    const oracionFinal = palabras.join(" ");
    return oracionFinal;
}

