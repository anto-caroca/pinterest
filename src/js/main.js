    var pixabayWidget = { 'key': '9821919-eb38392f2349a770434b8830a',
        class_name: 'pixabay_widget', // class name for detecting widgets on the page
        lang: 'es', 
        image_type: 'all',
        safesearch: false,
        editors_choice: false,
        order: 'popular',
        per_page: 20,
        row_height: 170,
        max_rows: false,
        truncate: false,
        target: '_blank',
        navpos: 'top',
        branding: false,
        prev: '◄ PREV',
        next: 'NEXT ►'
    }

let searchPin = document.getElementById('searchPin');
searchPin='cats';
let images = document.getElementById('images');

const upload = document.getElementById('upload');

upload.addEventListener('click', foto);

function foto(){
    $('#myModal').modal();
}

images.innerHTML = `<div class='pixabay_widget' data-search=${searchPin} data-max-rows='3' data-row-height='180' data-branding='false' target:'_blank' data-navpos='top'></div>`;

function buscar(){
searchPin = document.getElementById('searchPin').value;
images.innerHTML = `<div class='pixabay_widget' data-search=${searchPin} data-max-rows='3' data-row-height='180' data-branding='false' data-navpos='top'></div>`;
console.log(searchPin);
new initPixabayWidget();

}

 