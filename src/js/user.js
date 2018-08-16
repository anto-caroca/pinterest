let modalT = document.getElementById('modalT');
let modalB = document.getElementById('modalB');
const crearPin = document.getElementById('crearPin');
let pinT = document.getElementById('pinT');
let pinB = document.getElementById('pinB');
const pinCreado = document.getElementById('pinCreado');
const iconTrash = document.getElementById('iconTrash');

let close = document.getElementById('close');

function clearInput(){
    searchPin = document.getElementById('searchPin').value= "";
}

function clearPin(){
    modalT.value= "";
    modalB.value= "";
}


function foto(){
    $('#myModal').modal();
}

pinCreado.style.display ="none";

crearPin.addEventListener('click', pin);

function pin(){
    pinCreado.style.display ="block";
 pinT.innerHTML = modalT.value;
 pinB.innerHTML += modalB.value;
 modalB.value="";
 modalT.value="";

}

iconTrash.addEventListener('click', deletePin);

function deletePin(){
    pinT.innerHTML = "";
    pinB.innerHTML = "";
    pinCreado.style.display="none";
}
