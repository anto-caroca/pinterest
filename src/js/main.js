
let searchPin = document.getElementById('searchPin');
searchPin='cats';
let images = document.getElementById('images');

images.innerHTML = `<div class='pixabay_widget' data-search=${searchPin} data-max-rows='3' data-row-height='180' data-branding='false' data-navpos='top'></div>`;



 