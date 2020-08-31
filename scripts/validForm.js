var attempt = 3;
var email = document.getElementById("defaultLoginFormEmail");
var password = document.getElementById("defaultLoginFormPassword");
var formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  // Variable to count number of attempts.
  var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (re.exec(email.value) && password.value === "123") {
    $("#myModal").modal("show");
    $("#modalTitle").html("Bienvenido");
    $("#textModal").html("Intente resolver Adivinanza");

    setTimeout(function () {
      window.location = "adivinanza.html";
    }, 2000);
    // Redirecting to other page.
  } else {
    attempt--; // Decrementing by one.
    alert("Tienes " + attempt + " intentos;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      $("#myModal").modal("show");
      $("#modalTitle").html("Sistema Bloqueado");
      $("#textModal").html("Intente más tarde");
      document.getElementById("defaultLoginFormEmail").disabled = true;
      document.getElementById("defaultLoginFormPassword").disabled = true;
      document.getElementById("sigInBoton").disabled = true;
    }
  }
});
