var form = document.getElementById("formLogin");
var nombre = document.getElementById("defaultLoginFormNombre");
var apellido = document.getElementById("defaultLoginFormApellido");
var email = document.getElementById("defaultLoginFormEmail");
var password = document.getElementById("defaultLoginFormPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (
    nombre.value != null &&
    apellido.value != null &&
    email != null &&
    password != null
  ) {
    if (!re.exec(email.value)) {
      $("#myModal").modal("show");
      $("#modalTitle").html("Email");
      $("#textModal").html("Ingrese un Email válido");
      $("#botonModal").removeClass("btn btn-success");
      $("#botonModal").addClass("btn btn-danger");
    } else {
      $("#botonModal").removeClass("btn btn-danger");
      $("#botonModal").addClass("btn btn-success");
      $("#myModal").modal("show");
      $("#modalTitle").html("Bienvenido");
      $("#textModal").html(
        "Bienvenido al Sistema: " + apellido.value + " ," + nombre.value
      );

      setTimeout(function () {
        window.location = "adivinanza.html";
      }, 2500);
    }
  }
});
