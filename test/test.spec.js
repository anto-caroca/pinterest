const assert = require("assert"); 
const obtenerListaImagenes = require('../src/js/test');
let imagenes = [];

describe('obtenerListaImagenes', ()=>{
    it('debería indicar el tipo de dato', ()=>{
        assert.equal(typeof imagenes, "object");
    });
    
    it('debería devolver 0 si es que no hay imagenes', ()=>{
        assert.equal(obtenerListaImagenes === imagenes.length, 0);
    });

    it('debería devolver la cantidad de imagenes cargadas', ()=>{
        assert.equal(obtenerListaImagenes === imagenes.length, 0);
    });
    it('debería  indicar si se cargó una imagen', ()=>{
        assert.equal(obtenerListaImagenes === imagenes.value, 0);
    });

});