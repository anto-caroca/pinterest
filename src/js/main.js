
let searchPin = document.getElementById('searchPin');
searchPin='cats';
let images = document.getElementById('images');



images.innerHTML = `<div class='pixabay_widget' data-search=${searchPin} data-max-rows='3' data-row-height='180' data-branding='false' target:'_blank' data-navpos='top'></div>`;

function buscar(){
searchPin = document.getElementById('searchPin').value;
images.innerHTML = `<div class='pixabay_widget' data-search=${searchPin} data-max-rows='3' data-row-height='180' data-branding='false' data-navpos='top'></div>`;
console.log(searchPin);
new initPixabayWidget();

}

 