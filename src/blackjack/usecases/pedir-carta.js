
/**
 * Esta función nos permite retonar una carta aleatoria del deck.
 * @param {Array<String>} deck Recibe como parámetro el deck
 * @returns {String}Eliminar y Retorna la última carta del deck
 */
export const pedirCarta = (deck) => {

    if( !deck || deck.length === 0 ){
        throw 'No hay cartas en el deck';

    }

    return deck.pop();
}

