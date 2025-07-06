function contarStickers() {
  let s1 = parseInt(document.getElementById("sticker1").value) || 0;
  let s2 = parseInt(document.getElementById("sticker2").value) || 0;
  let s3 = parseInt(document.getElementById("sticker3").value) || 0;

  let total = s1 + s2 + s3;
  let resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
}
