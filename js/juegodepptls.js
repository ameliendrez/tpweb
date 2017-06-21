$(document).ready(function() {
  "use strict"

  Class Jugador {
    
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


    let jugador1 = new Jugador;
    let jugador2 = new Jugador;


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
