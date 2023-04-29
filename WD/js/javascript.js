
// 1
function primerCar(oracion){
  // Convertir la oracion en un objeto con el conteo de cada caracter
  const conteo = {};

  for (let i = 0; i < oracion.length; i++) {
    const caracter = oracion[i];
    conteo[caracter] = (conteo[caracter] || 0) + 1;
  }
  
  // Buscar el primer caracter que tiene conteo 1
  for (let i = 0; i < oracion.length; i++) {
    const caracter = oracion[i];
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

// 3.2


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
function haker(oracion){
  let output = ""

  for (let i = 0; i < oracion.length; i++){
    if(oracion[i] == "a" || oracion[i] == "A"){
      output += "4"
    } else if (oracion[i] == "e" || oracion[i] == "E"){
      output += "3"
    } else if (oracion[i] == "i" || oracion[i] == "I"){
      output += "1"
    } else if (oracion[i] == "o" || oracion[i] == "O"){
      output += "0"
    } else {
      output += oracion[i];
    }
  }
  return output;
}



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
function oracionCorta(listaoracions) {

  let oracionCorta = Infinity;
  long = listaoracions.length;

  for (let i = 0; i < long; i++) {
    let longitudoracion = listaoracions[i].length;
    if (longitudoracion < oracionCorta) {
      oracionCorta = longitudoracion;
    }
  }
  return oracionCorta;
}



// 10
function palindromo(oracion){

  oracion = oracion.toLowerCase().replace(/[^a-z0-9]/g, "");
  let oracionInvertida = oracion.split("").reverse().join("");

  if (oracion === oracionInvertida){
    return "SI es palíndromo.";
  } else {
    return "NO es palíndromo";
  }
}


// 11
function ordenAlfabetico(listaoracions){
  listaoracions.sort();
  
  return listaoracions;
}


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
    return (lista[mitad - 1] + lista[mitad]) / 2;


  } else {
    
    let mitad = Math.floor(longitud / 2);
    return lista[mitad];
  }


}

function moda(lista) {
  // frecuencia de cada número

  let frecuencias = {};

  for (let i = 0; i < lista.length; i++) {
    let numero = lista[i];
    if (numero in frecuencias) {
      frecuencias[numero]++;
    } else {
      frecuencias[numero] = 1;
    }
  }

  // encontrar el número con la mayor frecuencia
  let moda = null;
  let maxFrecuencia = 0;
  for (let numero in frecuencias) {
    let frecuencia = frecuencias[numero];
    if (frecuencia > maxFrecuencia) {
      moda = numero;
      maxFrecuencia = frecuencia;
    }
  }

  return moda;
}


// 13
function masFrecuente(listaCadenas) {

  let frecuencia = {};

  // Paso 1: contar la frecuencia de cada cadena
  listaCadenas.forEach(cadena => {
    if (frecuencia[cadena]) {
      frecuencia[cadena]++;
    } else {
      frecuencia[cadena] = 1;
    }
  });

  // Paso 2: encontrar la cadena con la frecuencia máxima
  let maxFrecuencia = 0;
  let cadenaMasFrecuente = null;

  for (let cadena in frecuencia) {
    if (frecuencia[cadena] > maxFrecuencia) {
      maxFrecuencia = frecuencia[cadena];
      cadenaMasFrecuente = cadena;
    }
  }

  return cadenaMasFrecuente;
}



// 14 

function potencia(num) {
  if (num <= 0) {
    return false;
  }
  // & bit a bit
  return (num & (num - 1)) === 0;
}




// 15 
function numerosDescendente(num){
  num.sort(function(a, b){return b - a});

  return num;
}


// *** PRUEBAS ***
console.log("Encuentra el primer carácter de un oracion de texto que no se repite: " + primerCar("abacddbec"));
console.log("Bubble Sort: "+ bubbleSort([7,5,23,678,423,656,2]));
console.log("Invierte un arreglo de números y regresa un nuevo arreglo con el resultado: " + reverseLst([1,2,3,4,5]));
console.log("Recibe una oracion de texto y regrese una nueva con la primer letra de cada palabra en mayúscula: " + upperCase("hola mundo esto es una prueba"));
console.log("Calcula el máximo común divisor de dos números: Ejemplo, 20 y 56: " + mcd(20,56));
console.log("Cambia una oracion de texto a Hacker Speak: " + haker("Javascript es divertido"));
console.log("Regresa una lista con todos los factores: Ejemplo: 56 " + factoriza(56))
console.log("Quita los elementos duplicados de un arreglo y regresa una lista con los elementos que quedan: " + quitaDuplicados([1, 0, 1, 1, 0, 0]));
console.log("Regresa la longitud de la oracion más corta: Ejemplo:'Hola','Mundo','Pruebas': " + oracionCorta(["Hola","Mundo","Pruebas"]));
console.log("Revisa si una oracion de texto es un palíndromo o no: Ejemplo: Ana lava lana " + palindromo("Ana lava lana"));
console.log("Devuelve una nueva lista con todas las oracions en orden alfabético: " + ordenAlfabetico(["Mexico","Barcelona","Japon","Dinamarca"]));
console.log("Devuelve moda: " + moda([1,2,3,4,5,6,7,8,2]) + " y mediana: " + mediana([1,2,3,4,5,6,7,8,2]));
console.log("Devuelve la cadena más frecuente: Ejemplo: " + masFrecuente(["hola", "adios", "hola", "hola", "mundo"]));
console.log("Devuelve verda dero si es una potencia de dos, falso de lo contrario. Ejemplo: 1024: " + potencia(1024));
console.log("Devuelve una nueva lista con todos los números en orden descendente: " + numerosDescendente([1,2,3,4,5,6,7,8,9]));