const obtenerListaImagenes = (imagenes) => {
  
   imagenes = [];
    
      if(imagenes.lenght > 0) {
        return 'hay imagenes';
    } else if (imagenes.length < 1) {
        return 'no hay imagenes';
    }
    
      return imagenes;
    };
    
    module.exports = obtenerListaImagenes;