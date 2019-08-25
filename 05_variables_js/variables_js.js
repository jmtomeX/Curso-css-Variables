/* CSSOM
* getComputerStyle(elemen)
Devuelve el estilo computado del elemento (después que lo ejecutar el navegador).
Los estilos computados representan los valores finales computed (en)  de las propiedades CSS del elemento. 

Para recuperar una variable CSS
getComputedStyle(element).getPropertyValue('--variable')

Para setear una variable CSS
element.style.setProperty('--variable','value');

*/

// Todos los elementos del html
const rootStyles = getComputedStyle(document.documentElement);
const color = getComputedStyle(document.documentElement).color;

console.log(rootStyles);
console.log(color);