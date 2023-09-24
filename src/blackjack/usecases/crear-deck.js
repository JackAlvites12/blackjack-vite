import _ from 'underscore';


/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tiposDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales  Ejemplo: ['A', 'J', 'Q', 'K'] 
 * @returns {Array<String>} retorna un nuevo deck de cartas aleatorias.
 */


/* 
   Le paso como parámetros tiposDeCarta y tiposEspeciales
   voy a exportar esta función para poder usarlo en mi archivo index.js */ 
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    //Evaluamos posibles errores
    if(!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    

    let deck = [];

    //Creamos todas las cartas, empezando con los números
    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta){
            deck.push( i + tipo );
        }
    }

    //Para poder crear el tipo de carta con su símbolo especial: A de diamante, J de trebor, etc...
    for(let tipo of tiposDeCarta){
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }

    return _.shuffle( deck );
}

//Practica de exportar funcion... 

export const saludar = (usuario) => {
    return `Hola ${usuario} mucho gusto en conocerte :D`;
}

const miNombre = 'Jack Alvites';

export const frutas = ['Pera', 'Sandía', 'Mandarina'];
export const b = 20;

// export default miNombre;
// export default crearDeck;