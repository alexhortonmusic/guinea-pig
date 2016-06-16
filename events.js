var outputEl = document.getElementById('output-target');

// When unordered list is clicked, a message appears in output-target div
var uList = document.getElementById('uList');
uList.addEventListener('click', function () {
  outputEl.innerHTML = 'You clicked on the List section';
});

// When article is clicked, a message appears in output-target div
var articleEl = document.getElementById('articleEl');
articleEl.addEventListener('click', function () {
  outputEl.innerHTML = 'You clicked on the Article section';
});

//When hovering, message appears in output-target
var header = document.getElementById('page-header');
header.addEventListener('mouseover', function handleHeaderMouseOver () {
  outputEl.innerHTML = 'You moved your mouse over the header';
});

//When leaving after hovering, message appears in output-target
header.addEventListener('mouseout', function handleHeaderMouseOut () {
  outputEl.innerHTML = 'You left me!';
});

//Text mirrors below textbox in output-target
var inputBox = document.getElementById('keypress-input');
inputBox.addEventListener('keyup', function handleInputTextBoxEvent () {
  outputEl.innerHTML = inputBox.value;
});

// output div for buttons
var guineaPig = document.getElementById('guinea-pig');



// When clicked, guineaPig text changes color
var addColor = document.getElementById('add-color');
addColor.addEventListener('click', function addColorButtonEvent () {
	guineaPig.classList.toggle('add-color-btn');
})

// When clicked, guineaPig will grow/shrink
var hulkify = document.getElementById('make-large');
hulkify.addEventListener('click', function hulkifyButtonEvent () {
	guineaPig.classList.toggle('make-large-btn');
})

// When clicked, border appears around guineaPig
var captureIt = document.getElementById('add-border');
captureIt.addEventListener('click', function captureItButtonEvent () {
	guineaPig.classList.toggle('add-border-btn');
})

// When clicked, border appears rounded
var rounded = document.getElementById('add-rounding');
rounded.addEventListener('click', function roundedButtonEvent () {
	guineaPig.classList.toggle('add-rounding-btn');
})













