window.addEventListener('load', start);

// setting Vars
const rgbSliderComponent = document.querySelector('.container');
const colorDisplay = rgbSliderComponent.querySelector('#color_square');

const colorSlidersNodeList = rgbSliderComponent.querySelectorAll("input[type=range]");
const colorSliders = Array.from(colorSlidersNodeList);

const textInputNodeList = rgbSliderComponent.querySelectorAll("input[type=text]");
const textInputs = Array.from(textInputNodeList);

const R = colorSliders[0];
const G = colorSliders[1];
const B = colorSliders[2];

let colors = [R.value, G.value, B.value];


function start() {
	//  updateInputTextValue();
	colorSliders.map(slider => slider.nextElementSibling.value = slider.value);
	updateSquareColor(R.value, G.value, B.value);

	colorSlidersHandler();
}


function colorSlidersHandler() {
	rgbSliderComponent.addEventListener('change', event => {
		// update correspondent inputText value
		event.target.nextElementSibling.value = event.target.value;

		updateSquareColor(R.value, G.value, B.value);
	})
}

function updateSquareColor(red, green, blue, ) {
	colorDisplay.style.background = `rgb(${red}, ${green}, ${blue})`;
}