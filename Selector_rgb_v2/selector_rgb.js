// Elementos
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const alpha = document.getElementById('alpha');

const red_txt = document.getElementById('red_text');
const green_txt = document.getElementById('green_text');
const blue_txt = document.getElementById('blue_text');
const alpha_txt = document.getElementById('alpha_text');

// Valores colores
var valor_red = 0;
var valor_green = 0;
var valor_blue = 0;
var valor_alpha = 0;

// coger los estilos de root
const rootStyles = document.documentElement.style;


// Para red
// función para que se actualiza mientras se arrastra el mouse

const changeColorRed = (e) => {
    valor_red = e.target.value;
    rootStyles.setProperty('--red', valor_red);
}

// escuchar los eventos del scroll de rango
red.addEventListener('change', (e) => {
    changeColorRed(e);
});

red.addEventListener('mousemove', e => {
    changeColorRed(e);
    red_txt.innerHTML = valor_red;
});


// Para green
// función para que se actualiza mientras se arrastra el mouse
const changeColorGreen = (e) => {
    valor_green = e.target.value;
    rootStyles.setProperty('--green', e.target.value);
}

// escuchar los eventos del scroll de rango
green.addEventListener('change', (e) => {
    changeColorGreen(e);
});

green.addEventListener('mousemove', e => {
    changeColorGreen(e);
    green_txt.innerHTML = valor_green;
});

// Para blue
// función para que se actualiza mientras se arrastra el mouse
const changeColorBlue = (e) => {
    valor_blue = e.target.value;
    rootStyles.setProperty('--blue', e.target.value);
}

// escuchar los eventos del scroll de rango
blue.addEventListener('change', (e) => {
    changeColorBlue(e);
});

blue.addEventListener('mousemove', e => {
    changeColorBlue(e);
    blue_txt.innerHTML = valor_blue;
});

// Para Alpha
// función para que se actualiza mientras se arrastra el mouse
const changeColorAlpha = (e) => {
    valor_alpha = e.target.value;
    rootStyles.setProperty('--alpha', e.target.value);
}

// escuchar los eventos del scroll de rango
alpha.addEventListener('change', (e) => {
    changeColorAlpha(e);
});

alpha.addEventListener('mousemove', e => {
    changeColorAlpha(e);
    alpha_txt.innerHTML = valor_alpha;
});

// REcogemos los valores para añadirlos a la lista

const generate_sample = document.getElementById('generate_sample');

// Añadir elementos a la lista de muestras
function addSample(var_name_css) {
    //crear un nuevo item 
    var new_li = document.createElement("li");
    var colorSample = document.createTextNode('rgba(' + valor_red + ',' + valor_green + ',' + valor_blue + ',' + valor_alpha + ')');
    if (var_name_css == "null") {
        new_li.append(colorSample);
    } else {
        new_li.append("--" + var_name_css + ":");
        new_li.append(colorSample);
        
    }

    // Añadir el elemento al DOM
    const result_list_ul = document.getElementById('result_list');
    result_list_ul.appendChild(new_li);
}

// Escucha del botón
generate_sample.addEventListener('click', () => {
    var var_name_css = prompt("Inserta el nombre de la variable css");
    if (var_name_css == null || var_name_css == "") {
        alert("No se ha creado variable.");
        addSample("null");
    } else {
        addSample(var_name_css);
    }

});
