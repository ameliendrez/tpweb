$(document).ready(function() {
  "use strict"

  /*


  class Juego {

    constructor (jugador1, jugador2){
      this.gamer1 = jugador1;
      this.gamer2 = jugador2;
    }

    jugar(){

      let obtenerEleccionJ1 = this.gamer1.traerEleccion();
      let obtenerEleccionJ2 = this.gamer1.eleccionMaquina();
      let resultado = ganador();
      
      
    }

    ganador(){

      if ((obtenerEleccionJ1 === obtenerEleccionJ2)) {
            alert ("Empate");
      }

      else if ((obtenerEleccionJ1 === "piedra") && ((obtenerEleccionJ2 === "lagarto")|| (obtenerEleccionJ2 === "tijera"))) {
            alert ("Ganaste");
      }
      
      else if ((obtenerEleccionJ1 === "papel") && ((obtenerEleccionJ2 === "piedra")|| (obtenerEleccionJ2 === "spock"))) {
            alert ("Ganaste");
      }

      else if ((obtenerEleccionJ1 === "tijera") && ((obtenerEleccionJ2 === "papel")|| (obtenerEleccionJ2 === "lagarto"))) {
            alert ("Ganaste");
      }

      else if ((obtenerEleccionJ1 === "lagarto") && ((obtenerEleccionJ2 === "papel")|| (obtenerEleccionJ2 === "spock"))) {
            alert ("Ganaste");
      }

      else if ((obtenerEleccionJ1 === "spock") && ((obtenerEleccionJ2 === "piedra")|| (obtenerEleccionJ2 === "tijera"))) {
            alert ("Ganaste");
      }

      else {
        alert("Perdiste");
      }

      
      
    }

    actualizarTablaPartidas(){
      
    }

    
    
  }


  class Jugador {
    constructor (eleccion, creditoDisponible){

      this.elecion = eleccion;
      this.credito = creditoDisponible; 
      
    }

    traerEleccion(){
      return eleccion;
    }

    hacerapuesta() {
      let unapartida = 5
      let trespartidas =10;
      let cincopartidas =20
      let diezpartidas =30

    if ($("#tournement").prop("checked")) {
      if ((".cantidadPartidas").val() === "3") {
        this.creditoDisponible -= trespartidas;
      }
      if ((".cantidadPartidas").val() === "5") {
        this.creditoDisponible -= cincopartidas;
      }
      if ((".cantidadPartidas").val() === "10") {
        this.creditoDisponible -= diezpartidas;
      }
    }

    else {
      this.creditoDisponible -= unapartida;
    }
      
    }

    ganarCredito() {

      if ($("#tournement").prop("checked")) {
        if ((".cantidadPartidas").val() === "3") {
          this.creditoDisponible -= (trespartidas*2);
        }
        if ((".cantidadPartidas").val() === "5") {
          this.creditoDisponible -= (cincopartidas*2);
        }
        if ((".cantidadPartidas").val() === "10") {
          this.creditoDisponible -= (diezpartidas*2);
        }
      }
      this.creditoDisponible += (unapartida*2);
    }
    
  }

  class Maquina {
    constructor (){

      this.eleccion = this.eleccionMaquina();
      
    } 

    eleccionMaquina() {

      let elecciondeMaquina;
      let valor = Math.floor(Math.random()*5);

        if (valor === 1) {
          eleccionMaquina = "piedra";
          
        }
        else if (valor === 2) {
          eleccionMaquina = "papel";
          
        }
        else if (valor === 3) {
          eleccionMaquina = "tijera";
          
        }
        else if (valor === 4) {
          eleccionMaquina = "lagarto";
          
        }
        else {
          eleccionMaquina = "spock";

        }

        return elecciondeMaquina;

    }
    
  }

  function iniciarVariables() {

    let jugador1 = new Jugador ((".pptls").checked.val(), (".credj1").val())
    let jugador2;

      if ($("#stuartmode").prop("checked")) {
        jugador2 = new Jugador ((".pptls2").checked.val(), (".credj2").val())
      }

      else {
        
        jugador2 = new Maquina; 
      }

    let comenzarJuego = new Juego (jugador1, jugador2);

    
  }

    */


  function jugar(jugador1, jugador2) {

    if ($("#stuartmode").prop("checked")) {

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

    else {

      if ((jugador1 === jugador2)) {
            alert ("Empate");
      }

      else if ((jugador1 === "piedra") && ((jugador2 === "lagarto")|| (jugador2 === "tijera"))) {
            alert ("Ganaste");
      }
      
      else if ((jugador1 === "papel") && ((jugador2 === "piedra")|| (jugador2 === "spock"))) {
            alert ("Ganaste");
      }

      else if ((jugador1 === "tijera") && ((jugador2 === "papel")|| (jugador2 === "lagarto"))) {
            alert ("Ganaste");
      }

      else if ((jugador1 === "lagarto") && ((jugador2 === "papel")|| (jugador2 === "spock"))) {
            alert ("Ganaste");
      }

      else if ((jugador1 === "spock") && ((jugador2 === "piedra")|| (jugador2 === "tijera"))) {
            alert ("Ganaste");
      }

      else {
        alert("Perdiste");
      }
    }
    
  }

  function jugadorHumano() {

    $(".pptls")on("click",function (event) {
      
        let eleccion =  event.id

    });

    
  }
  
  function jugadorHumano2() {

    let eleccion = $(".pptls2").val();
    return eleccion
    
  }


  function iniciarJuego() {
  

//    if ($("#tournement").prop("checked")) {
      if ($("#stuartmode").prop("checked")) {          

        let jugador1 = jugadorHumano();
        console.log("jugador 1");
        console.log(jugador1);
        
        let jugador2 = jugadorHumano2();
        console.log("jugador 2");
        console.log(jugador2);

        jugar(jugador1,jugador2);
      }

      else {

        let jugador1 = jugadorHumano();
        console.log("jugador 1");
        console.log(jugador1);
        
        let jugador2 = eleccionMaquina();
        console.log("jugador 2");
        console.log(jugador2);
        jugar(jugador1,jugador2);
        
      }


/*
          if (((".cantidadPartidas").val() === "3")&&($(".credj1").val() >=10)&&($(".credj2").val() >=10)) {
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
              alert("Finalizo el torneo de 3");
          }
          else if ((((".cantidadPartidas").val() === "5"))&&($(".credj1").val() >=20)&&($(".credj2").val() >=20)) {
  
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            
            alert("Finalizo el torneo de 5");
            
          }
  
          else if (($(".credj1").val() >=30)&&($(".credj2").val() >=30)) {
  
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
            iniciarVariables();
  
  
              alert("Finalizo el torneo de 10");
            }
  
          }
      

      else {
        if (((".cantidadPartidas").val() === "3")&&($(".credj1").val() >=10)) {

          iniciarVariables();
          iniciarVariables();
          iniciarVariables();


            alert("Finalizo el torneo de 3");
        }
    
        else if ((((".cantidadPartidas").val() === "5")&&($(".credj1").val() >=20))) {

          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          
          alert("Finalizo el torneo de 5");
          
        }

        else if (($(".credj1").val() >=30)) {

          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();
          iniciarVariables();


            alert("Finalizo el torneo de 10");
          }
        
        
    }
      
    }

    else {

      if (($(".credj1").val() >=5)) {
      iniciarVariables();
    }
  */    
  }

//};



function eleccionMaquina() {

    
    let valor = Math.floor(Math.random()*5 + 1);

    console.log(valor);

      if (valor === 1) {
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
    //let eleccionesUsuario2 = $(".pptls").event;
    

      $(".contenedor").html(data);
      $(".j2").hide();
      $(".victoria").hide();
      $(".victoriaj1").hide();
      $(".victoriaj2").hide();
      $(".derrota").hide();


      $("#stuartmode").on("click", habilitarJ2);
      $(".jugar").on("click", iniciarJuego);

      

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
