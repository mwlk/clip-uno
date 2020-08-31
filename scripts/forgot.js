var email = document.getElementById("emailForgot");
var formForgot = document.getElementById("form");

formForgot.addEventListener("submit", function (e) {
  e.preventDefault();

  var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(email.value)) {
    $("#myModal").modal("show");
    $("#modalTitle").html("Reinicio de Password");
    $("#textModal").html("Ingrese un Email Válido");
    document.forgot.email.focus();
    return 0;
  } else {
    $("#botonModal").removeClass("btn btn-danger");
    $("#botonModal").addClass("btn btn-success");
    $("#myModal").modal("show");
    $("#modalTitle").html("Reinicio de Password");
    $("#textModal").html(
      "Se envió a " + email.value + " el reinicio de Password"
    );
    setTimeout(function () {
      window.location = "index.html";
    }, 3000);
  }
});
