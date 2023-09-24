
/**
 * 
 * @param {*} divJugadorCartas 
 * @param {String} carta 
 * @returns {HTMLImageElement} nos retorna una imagen
 */

export const crearCartaHTML = ( carta ) => {

    if(!carta) throw new Error('La carta es un argumento obligatorio');
    //Creamos una constante para crear un elemento tipo <img>
    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/${carta}.png`;

    //Le añadimos la clase 'carta' a la imagen para que aplique los estilos del CSS definidos.
    imgCarta.classList.add('carta');

    return imgCarta;
    
}