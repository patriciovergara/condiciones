function verificarPassword() {
  const d1 = document.getElementById("dig1").value;
  const d2 = document.getElementById("dig2").value;
  const d3 = document.getElementById("dig3").value;

  const password = d1 + d2 + d3;
  const respuesta = document.getElementById("respuesta");

  if (password === "911") {
    respuesta.textContent = "password 1 correcto";
  } else if (password === "714") {
    respuesta.textContent = "password 2 correcto";
  } else {
    respuesta.textContent = "password incorrecto";
  }
}
