// Usamos un selector de atributo
const changeThemeButtons = document.querySelectorAll('[name=theme]');
const rootStyles = document.documentElement.style;

// Objeto del tema claro
const lightTheme = {
    '--bg-color': "#eee",
    '--bg-color-2': "#fff",
    '--text-color': "#53575A",
    '--acent-color': "#007BDF",
    '--font': "'Open Sans', sans-serif"
}

// Objeto del tema oscuro
const darkTheme = {
    '--bg-color': "#53575A",
    '--bg-color-2': "#282D31",
    '--text-color': "#eee",
    '--acent-color': "#FF3C32",
    '--font': "'Lsto', sans-serif"
}

for (let button of changeThemeButtons) {
    // Comprueba el check que se ha seleccionado
    button.addEventListener('change', e => {
        if (e.target.id === 'dark') {
            changeTheme(darkTheme);
        } else if (e.target.id === 'light') {
            changeTheme(lightTheme);
        }

    })
}

const changeTheme = (theme) => {
   // obtener las variables css, devuelve el nombre de la variable no la propiedad
   // en un array
    let cssVars = Object.keys(theme)
   
    // recorrer el objeto y aplicar los estilos a rootStyles
        for (let cssVar of cssVars) {
    // se le pasa el nombre de la variable(cssVar) y la propiedad
            rootStyles.setProperty(cssVar, theme[cssVar]);
        } 
    
}
