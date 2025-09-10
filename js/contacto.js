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
