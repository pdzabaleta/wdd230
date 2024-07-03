
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  button.addEventListener('click', () => {
    if (input.value != '') {                // make sure the input is not empty
      displayList(input.value);             // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);      // add the chapter to the array
      setChapterList();                     // update the localStorage with the new array
      input.value = '';                     // clear the input
      input.focus();                        // set the focus back to the input
    }
  });

 function displayList (item) {
    button.addEventListener('click', () => {
    // Paso 1: Verificar si el campo de entrada no está vacío
    if (input.value.trim() !== '') {
        // Paso 2: Crear un elemento <li>
        const li = document.createElement('li');

        // Paso 3: Crear un botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Paso 4: Texto del botón de eliminar
        
        // Paso 5: Establecer el texto del <li> al valor del campo de entrada
        li.textContent = input.value.trim();

        // Paso 6: Agregar el botón de eliminar al <li>
        li.append(deleteButton);

        // Paso 7: Agregar el <li> a la lista
        list.append(li);

        // Paso 8: Agregar un event listener al botón de eliminar para eliminar el <li> correspondiente
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Enviar el foco de vuelta al campo de entrada
        });

        // Paso 9: Enviar el foco al campo de entrada y limpiar su valor
        input.focus();
        input.value = '';
    } else {
        // Si el campo está vacío, mostrar un mensaje de alerta
        alert('Can not be empty.');
        input.focus(); // Enviar el foco de vuelta al campo de entrada
    }
});
 }
 function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }