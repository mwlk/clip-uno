var intentos = 4;
$("#alert").html("te quedan " + intentos + " intentos");
var respuesta = document.getElementById("respuesta");

var formulario = document.getElementById("adiv");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  if (respuesta.value.toUpperCase() === "HUEVO" ) {
    $("#alert").removeClass("alert alert-warning alert-dismissible fade show");
    $("#alert").addClass("alert alert-success");
    $("#alert").html("Felicitaciones");

    document.getElementById("respuesta").disabled = true;
    document.getElementById("boton").disabled = true;
  } else {
    if (
      respuesta.value === null ||
      respuesta.value != "huevo" ||
      respuesta.value != "HUEVO"
    ) {
      intentos--;
      $("#alert").html("te quedan " + intentos + " intentos");
      $("#bar").css("width", intentos * 25 + "%");

      if (intentos == 0) {
        document.getElementById("respuesta").disabled = true;
        $("#alert").removeClass(
          "alert alert-warning alert-dismissible fade show"
        );
        $("#alert").addClass("alert alert-danger");
        $("#alert").html("Eliminado");
        document.getElementById("boton").disabled = true;
      }
      if (intentos == 3) {
        $("#myModal").modal("show");
        $("#modalTitle").html("Adivinanza");
        $("#textModal").html("Es blanco");
      }
      if (intentos == 2) {
        $("#myModal").modal("show");
        $("#modalTitle").html("Adivinanza");
        $("#textModal").html("Tiene cáscara");
      }
    }
  }
});
