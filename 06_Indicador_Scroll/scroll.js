// Altura total del scroll
const altura_total = document.documentElement.scrollHeight;
// Altura de la pantalla
const altura_pantalla = document.documentElement.clientHeight;

console.log(altura_total);
console.log(altura_pantalla);
console.log(altura_total - altura_pantalla);

//CAlculamos la altura del scroll
const scrollUnit = (altura_total - altura_pantalla) / 100;

// sacamos todos los stilos del html
const rootStyles = document.documentElement.style;

addEventListener('scroll', () => {
    // redefinimos la variable por el valor 
    rootStyles.setProperty('--width', Math.round(scrollY / scrollUnit));
});
