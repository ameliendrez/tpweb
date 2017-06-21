$(document).ready(function() {
  "use strict"

function iniciarJuego() {

  class Jugador1 {
    constructor (){

      this.jugador = jugador.eleccionJugador();
    }

    eleccionJugador() {

      alert($("input:radio[class=pptls]:checked").val());

      if( $("input:radio[class=pptls]:checked").val() == "1" ){
        return "piedra"
      }
      else if( $("input:radio[class=pptls]:checked").val() == "2") {
        return "papel"
      }
      else if( $("input:radio[class=pptls]:checked").val() == "3") {
        return "tijera"
      }
      else if( $("input:radio[class=pptls]:checked").val() == "4") {
        return "lagarto"
      }
      else {
        return "spock"
      }



    }

  }
/*
  class Jugador2 {
    constructor (jugador){

      this.jugador = jugador;
    }

    eleccionJugada2() {

      if( ($(".pptls2").(this).attr("id")) == "piedra2" ){
        return "piedra"
      }
      else if( ($(".pptls2").(this).attr("id")) == "papel2") {
        return "papel"
      }
      else if( ($(".pptls2").(this).attr("id")) == "tijera2") {
        return "tijera"
      }
      else if( ($(".pptls2").(this).attr("id")) == "lagarto2") {
        return "lagarto"
      }
      else {
        return "spock"
      }


      console.log(this.eleccionJugada2());
    }

  }
*/
  class JugadorMaquina{
    constructor (jugador){

      this.jugador = jugador.eleccionMaquina();
    }

    eleccionMaquina() {


    let valor = Math.floor(Math.random()*5 + 1);


      if (valor == 1) {
        return "piedra";

      }
      else if (valor == 2) {
        return "papel";

      }
      else if (valor == 3) {
        return "tijera";

      }
      else if (valor == 4) {
        return "lagarto";

      }
      else {
        return "spock";

      }

    }

  }

  class Juego {
    constructor (j1, j2){

      this.jugador1 = j1;
      this.jugador2 = j2;

    }

    obtenerGanador() {

      if ((jugador1 === jugador2)) {
            alert ("Empate");
      }

      else if ((jugador1 === "piedra") && ((jugador2 === "lagarto")|| (jugador2 === "tijera"))) {
            alert ("Gana jugador 1");
      }

      else if ((jugador1 === "papel") && ((jugador2 === "piedra")|| (jugador2 === "spock"))) {
            alert ("Gana jugador 1");
      }

      else if ((jugador1 === "tijera") && ((jugador2 === "papel")|| (jugador2 === "lagarto"))) {
            alert ("Gana jugador 1");
      }

      else if ((jugador1 === "lagarto") && ((jugador2 === "papel")|| (jugador2 === "spock"))) {
            alert ("Gana jugador 1");
      }

      else if ((jugador1 === "spock") && ((jugador2 === "piedra")|| (jugador2 === "tijera"))) {
            alert ("Gana jugador 1");
      }

      else {
        alert("Gana jugador 2");
      }
    }

  }




  let jugador1;
  let jugador2;

    if ($("#stuartmode").prop("checked")) {
      jugador1= new Jugador(jugador1);
      jugador2= new Jugador2(jugador2);
      jugador1 = this.jugador1.eleccionJugador();
      jugador2 = this.jugador2.eleccionJugador2();


      }

      else {
        jugador1= new Jugador(jugador1);
        jugador2 = new JugadorMaquina(jugador2);
        jugador1 = this.jugador1.eleccionJugador();
        jugador2 = this.jugador2.eleccionMaquina();


      }


  let juego = new Juego (jugador1, jugador2);


}









  EjecutaralIniciar();

  function EjecutaralIniciar() {
    $.ajax({

      "url" : "http://localhost/proyectos/P-P-T-L-S/html/home.html",
      "method" : "GET",
      "data-type" : "HTML",
      "success" : mostrarContenido,
      "error": handleError
    });
  };

  function habilitarJ2() {

    if ($("#stuartmode").prop("checked")) {
      $(".pptls2").prop("disabled", false);
      $(".j2").show();
    }

    else {
      $(".pptls2").prop("disabled", true);
      $(".j2").hide();
    }
  }

  function mostrarContenido(data, textStatus, jqXHR) {


      $(".contenedor").html(data);
      $(".j2").hide();
      $(".victoria").hide();
      $(".victoriaj1").hide();
      $(".victoriaj2").hide();
      $(".derrota").hide();


      $("#stuartmode").on("click", habilitarJ2);

      $(".jugar").on("click", iniciarJuego());



  };



  function handleError(xmlhr, r, error ) {
    console.log(error);
  };


    $(".navegador").on("click", function (event) {

      let dirNueva = $(this).attr("href")
      event.preventDefault();

      //Esto recarga el navegador

      $.ajax({

        "url" : "http://localhost/proyectos/P-P-T-L-S/"+dirNueva,
        "method" : "GET",
        "data-type" : "HTML",
        "success" : mostrarContenido,
        "error": handleError


      });

      $(".contenedor").html("cargando...");

    });


});
