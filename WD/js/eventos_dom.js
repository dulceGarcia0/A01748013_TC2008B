

// 1 
// Agrega un listener al evento de movimiento del mouse en el documento
document.addEventListener('mousemove', function(event) {
    // Obtiene las coordenadas X e Y del mouse en relación al área de visualización
    let mouseX = event.clientX;
    let mouseY = event.clientY;
  
    // Obtiene el elemento del DOM que mostrará la posición del mouse
    let mousePositionElement = document.getElementById('mousePosition');
  
    // Actualiza el contenido del elemento con la posición del mouse
    mousePositionElement.textContent = 'Posición del mouse: ' + mouseX + ', ' + mouseY;
  });
  
  
// 2
// Espera a que se haya cargado completamente el documento HTML
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el formulario y el botón de envío
    let form = document.getElementById('form1');
    let submitBtn = document.getElementById('form1-submit');
  
    // Agrega un listener al evento de clic del botón de envío
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que se envíe el formulario
  
      // Obtiene los campos de nombre y apellido
      let firstNameInput = document.getElementById('form-fname');
      let lastNameInput = document.getElementById('form-lname');
  
      // Obtiene el nombre completo concatenando los valores de los campos de nombre y apellido
      let fullName = firstNameInput.value + ' ' + lastNameInput.value;
  
      // Crea un nuevo elemento de párrafo para mostrar el nombre completo
      let fullNameElement = document.createElement('p');
      fullNameElement.textContent = 'Nombre completo: ' + fullName;
  
      // Agrega el elemento del nombre completo al formulario
      form.appendChild(fullNameElement);
    });
  });
  
  
  //3 
  document.addEventListener('DOMContentLoaded', function() {
    // Obtén la referencia a la tabla y los botones de inserción de fila y columna
    let table = document.getElementById('sampleTable');
    let insertRowBtn = document.getElementById('btn-insert-r');
    let insertColumnBtn = document.getElementById('btn-insert-c');
  
    // Agrega un listener al botón de inserción de fila
    insertRowBtn.addEventListener('click', function() {
      // Crea una nueva fila y agrega celdas a la misma
      let newRow = table.insertRow();
      let columnCount = table.rows[0].cells.length; // Obtiene el número de columnas en la primera fila
  
      for (let i = 0; i < columnCount; i++) {
        let newCell = newRow.insertCell();
        newCell.textContent = 'New Row ' + (table.rows.length);
      }
    });
  
    // Agrega un listener al botón de inserción de columna
    insertColumnBtn.addEventListener('click', function() {
      // Recorre todas las filas existentes y agrega una celda en cada una
      let rowCount = table.rows.length;
  
      for (let i = 0; i < rowCount; i++) {
        let row = table.rows[i];
        let newCell = row.insertCell();
        newCell.textContent = 'New Column ' + (row.cells.length);
      }
    });
  });

  
  //4
  document.addEventListener('DOMContentLoaded', function() {
    // Obtén la referencia a la tabla y los elementos de entrada de usuario
    let table = document.getElementById('myTable');
    let rowIndexInput = document.getElementById('rowIndex');
    let colIndexInput = document.getElementById('colIndex');
    let newValueInput = document.getElementById('newValue');
    let changeBtn = document.getElementById('btn-change');
  
    // Agrega un listener al botón de cambio de contenido
    changeBtn.addEventListener('click', function() {
      // Obtiene los valores de fila, columna y nuevo valor ingresados por el usuario
      let rowIndex = parseInt(rowIndexInput.value);
      let colIndex = parseInt(colIndexInput.value);
      let newValue = newValueInput.value;
  
      // Verifica si los valores ingresados son válidos y están dentro de los límites de la tabla
      if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 1 || rowIndex > table.rows.length || colIndex < 1 || colIndex > table.rows[0].cells.length) {
        alert('Ingrese valores válidos de fila y columna');
        return;
      }
  
      // Actualiza el contenido de la celda en la posición especificada por el usuario
      let row = table.rows[rowIndex - 1];
      let cell = row.cells[colIndex - 1];
      cell.textContent = newValue;
    });
  });

  

  //5 
  document.addEventListener('DOMContentLoaded', function() {
    // Obtén la referencia al select y los botones de agregar y quitar color
    let colorSelect = document.getElementById('colorSelect');
    let addColorBtn = document.getElementById('btn-add-color');
    let removeColorBtn = document.getElementById('btn-rmv-color');
  
    // Agrega un listener al botón de agregar color
    addColorBtn.addEventListener('click', function() {
      // Crea un nuevo elemento de opción
      let newOption = document.createElement('option');
      newOption.textContent = getRandomColor(); // Asigna un color aleatorio al texto del nuevo elemento
  
      // Agrega el nuevo elemento al select
      colorSelect.appendChild(newOption);
    });
  
    // Agrega un listener al botón de quitar color
    removeColorBtn.addEventListener('click', function() {
      // Verifica si hay alguna opción seleccionada
      if (colorSelect.selectedIndex !== -1) {
        // Elimina la opción seleccionada
        colorSelect.remove(colorSelect.selectedIndex);
      }
    });
  
    // Función para obtener un color aleatorio de una lista predefinida
    function getRandomColor() {
      let colors = ['Pink', 'Purple', 'White', 'Yellow', 'Black', 'Blue', 'Green'];
      let randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  });


  // 6

  document.addEventListener('DOMContentLoaded', function() {
    // Obtén la referencia a la imagen
    let image = document.getElementById('imagenGato');
  
    // Agrega un listener para el evento "mouseover" en la imagen
    image.addEventListener('mouseover', function() {
      // Genera dos números aleatorios entre 300 y 600 para el ancho y alto de la nueva imagen
      let width = getRandomNumber(300, 600);
      let height = getRandomNumber(300, 600);
  
      // Crea un nuevo elemento de imagen con el tamaño aleatorio generado
      let newImage = document.createElement('img');
      newImage.src = 'http://placekitten.com/' + width + '/' + height;
  
      // Reemplaza la imagen existente por la nueva imagen generada
      image.parentNode.replaceChild(newImage, image);
    });
  
    // Función para generar un número aleatorio dentro de un rango específico
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  
  



