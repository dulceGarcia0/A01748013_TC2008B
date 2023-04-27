
// 1
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

// 2
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


// 3
function reverseLst(lista){
    //longitud de la lista
    let longitud = lista.length;
    //lista vacia para ir pusheando los ultimos elementos de la lista existente
    let listVacia = [];


    //itera desde el final hacia el principio
    for (let i = longitud - 1; i >= 0; i--) {
        listVacia.push(lista[i]);
    }

    //regresa la lista que era vacia
    return listVacia;
}


// 4
function upperCase(oracion){

    //la oracion la separa desde los espacios 
    const palabras = oracion.split(" ");

    //para cada palabra, la letra que esté en posicion 0, la pone con mayúscula y le agrega lo restante
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
    //junta la oracion 
    const oracionFinal = palabras.join(" ");

    //regresa la oracion completa
    return oracionFinal;
}


// 5
function mcd(x,y){
  let res = 1;
  
  for (let i = 1; i <= x; i++){
    if ((x % i == 0) && (y % i == 0)){
      res = i;
    }
  }
  return res;
}




// 6




// 7
function factoriza(num){
  let lst = [];

  for (let i = 1; i <= num; i++){
    if (num % i == 0){
      lst.push(i);
    }
  }
  return lst;
}


// 8
function quitaDuplicados(lista) {
  //El método Set crea un objeto que permite almacenar valores únicos de cualquier tipo
  //Array lo vuelve a convertir el un arreglo para poder así regresar lo que se pide
  return Array.from(new Set(lista));
}


// 9


// 10


// 11


//12
function mediana(lista){
  //ordenar la lista
  //funcion de comparación
  lista.sort(function(a, b) {
    return a - b;
  });

  let longitud = lista.length;

  if (longitud % 2 == 0){
    let mitad = longitud / 2;
    return console.log("Mediana: " + (lista[mitad - 1] + lista[mitad]) / 2);


  } else {
    
    let mitad = Math.floor(longitud / 2);
    return lista[mitad];
  }


}

// 13



// 14 

function potencia(num){

  let binario = num.toString(2);
  let segundoNum = num - 1;
  let binario2 = segundoNum.toString(2);

  if (binario == 0 && binario2 == 0){
    return true;
  } else {
    return false;
  }

}





// 15 