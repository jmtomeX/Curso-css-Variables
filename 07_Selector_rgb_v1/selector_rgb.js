const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const alpha = document.getElementById('alpha');

const red_txt = document.getElementById('red_text');
const green_txt = document.getElementById('green_text');
const blue_txt = document.getElementById('blue_text');
const alpha_txt = document.getElementById('alpha_text');

var valor_red = 0;
var valor_green = 0;
var valor_blue = 0;
var valor_alfa = 0;

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
    red_txt.value. = valor_red;
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
    green_txt.value = valor_green;
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
    blue_txt.value = valor_blue;
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
    alpha_txt.value = valor_alpha;
});
