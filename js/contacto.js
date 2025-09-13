// Inicia EmailJS
(function(){
	emailjs.init("UiWcxoX33zUiOczXs");
})();

// Manejo del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();

emailjs.sendForm('service_d9e22xn', 'template_2dqc2fw', this)
	.then(() => {
		document.getElementById("resultado").innerText = "✅ Mensaje enviado con éxito!";
		this.reset();
	})
	.catch((err) => {
		document.getElementById("resultado").style.color = "red";
		document.getElementById("resultado").innerText = "❌ Error: " + JSON.stringify(err);
	});
});

// Manejo de solo números positivos
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("soloPositivos");

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "-" || e.key === "e") {
        e.preventDefault(); // bloquea negativos y notación científica
      }
    });
  } else {
    console.error("No se encontró el input con id 'soloPositivos'");
  }
});