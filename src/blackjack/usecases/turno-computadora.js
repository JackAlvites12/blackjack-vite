import { pedirCarta, valorCarta, crearCartaHTML} from './'; 

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosAcumulados elemento HTML para mostrar puntos acumulados
 * @param {HTMLElement} divComputadoraCartas elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosAcumulados, divComputadoraCartas, deck ) => {


    let puntosComputadora = 0;

    //Vamos a ejecutar al menos una sola vez 
    do {
        const carta = pedirCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosAcumulados.innerText = puntosComputadora;

        //
        const imgCarta = crearCartaHTML( carta )

        divComputadoraCartas.append(imgCarta);

        /* Si los puntos mínimos del jugador son mayores a 21
        no hay manera de que el bucle se siga ejecutando, con la primera vuelta 
        está bien, por ende nos salimos de él. */ 

        /* Porque si el jugador saca por ejemplo 24 perdió y la computadora con cualquier carta 
        que saque ya ganó.  */
        if( puntosMinimos > 21 ){
            break;
        }
    

    //Se seguirá ejecutando si cumple con la siguiente condición:
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    /* -> En el navegador la computadora seguirá 
        Sacando cartas hasta superar el puntaje del jugador 
        Por ejemplo en navegador saca 10, y los puntos del jugador son 17....
        la computadora seguirá pidiendo porque cumple con la condición... 
        Si saca más de 21 pierde. */

    /* Nos daremos cuenta que las alertas las ejecuta muy tarde, esto pasa porque JavaScript no es multihilo
    quiere decir que todo el bucle lo está haciendo simultáneamente...
    Para solucionar esto usaremos la función setTimeOut propia de javascript */ 

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana');

        }else if(puntosMinimos > 21){
            alert('Ganó la computadora');

        }else if(puntosComputadora > 21){
            alert('Ganó el jugador');

        }else{
            alert('Ganó la computadora');
        }
    }, 100);
};