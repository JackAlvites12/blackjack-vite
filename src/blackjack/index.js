import _ from 'underscore'

/* Debemos tomar la función crearDeck 
  Realizamos una importación individual, es decir, 
  llamaremos a una sola función del archivo crear-deck.js */

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

// import cualquierNombre, {b} from './usecases/crear-deck';

/* Importación de una exportación por defecto: 

   import crearDeckDefault from './usecases/crear-deck'; 

*/ 

/*
    Signos de cartas:
    ------------------
    • 2C = Two of Clubs (Tréboles)
    • 2D = Two of Diamonds (Diamantes)
    • 2H = Two of Hearts (Corazones)
    • 2S = Two of Speads (Espadas)

    Explicación del juego BlackJack:
    ---------------------------------
    • Tenemos que alcanzar la puntuación de 21 sin pasarnos... y podemos ganar fácilmente
      pero si nos detenemos en un número menor a 21 vamos a competir con la computadora, si la 
      computadora alcanza un numero mayor que el de nosotros perdemos, pero si la computadora se pasa
      de 21 entonces ganamos y por último si la computadora saca 21 y nosotros 21 queda en empate.
*/

/* Patrón Módulo
----------------- */ 

(() => {

  'use strict'
  /* practica import, export  

  let usuario = 'Jack'; 
  frutillas.forEach(item => {
    console.log(item);
  }) */ 

  //-------------
  let deck    = [],
      puntosJugador = 0,
      puntosComputadora = 0;

  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K']

  //------------------Referencias del HTML --------------------
  const btnPedir         = document.querySelector('#btnPedir'),
        btnDetener       = document.querySelector('#btnDetener'),
        btnNuevoJuego    = document.querySelector('#btnNuevoJuego');

  const divJugadorCartas     = document.querySelector('#jugador-cartas'),
        divComputadoraCartas = document.querySelector('#computadora-cartas'),
        puntosAcumulados     = document.querySelectorAll('small');


  // Esta función inicializa el juego
  const inicializarJuego = () => {

      deck = crearDeck(tipos, especiales);
  }


  btnPedir.addEventListener('click', () => {

      inicializarJuego();

      const carta = pedirCarta(deck);
      puntosJugador += valorCarta(carta);

      console.log(puntosJugador);


      //Ahora debemos poner los puntos acumulados en el <small> de nuestro HTML 
      puntosAcumulados[0].innerText = puntosJugador
      
      /* ----------------- CREAR CARTAS EN HTML -------------
      <img class="carta" src="assets/cartas/10C.png" alt=""> */
      const imgCarta = crearCartaHTML( carta )

      divJugadorCartas.append(imgCarta);

      //Añadimos al contenedor de imagénes de cartas la imagen de la carta que vamos a ir creando.
      //Evaluemos si el jugador superó los 21 puntos 
      if( puntosJugador > 21 ){
          //Si los puntos del jugador superan los 21 puntos será el turno de la computadora.
          turnoComputadora( puntosJugador, puntosAcumulados[1], divComputadoraCartas, deck );
          console.warn('Perdiste');

          /* Cómo puedo bloquear el botón de pedirCarta cuando ya perdío?
          Con el atributo disabled inicializado en true */
          btnPedir.disabled = true;
          btnDetener.disabled = true;


      } else if ( puntosJugador === 21 ){

          console.warn('21, Genial!');

          /* Deshabilitamos botón cuando el jugador tenga 21 puntos
          para que no siga pidiendo cartas */
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          
          //Llamamos al turno de la computadora
          turnoComputadora( puntosJugador, puntosAcumulados[1], divComputadoraCartas, deck );

      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora( puntosJugador, puntosAcumulados[1], divComputadoraCartas, deck );

  });


  btnNuevoJuego.addEventListener('click', () => {
      
      console.clear()
      inicializarJuego();

      puntosJugador = 0;
      puntosComputadora = 0;

      puntosAcumulados[0].innerText = 0;
      puntosAcumulados[1].innerText = 0;

      divJugadorCartas.innerHTML = '';
      divComputadoraCartas.innerHTML = '';

      btnPedir.disabled = false;
      btnDetener.disabled = false;
      btnNuevoJuego.disabled = false;

  });

})();



