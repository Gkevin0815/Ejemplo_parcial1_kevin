

//Crear un boton que sirva con la API de Whatsapp
document.getElementById("whatsapp-button").addEventListener("click", function() {
	window.open("https://wa.me/573046603082", "_blank");
});
//Cambiar el color del boton al pasar el mouse
document.getElementById("whatsapp-button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#25D366";
});
document.getElementById("whatsapp-button").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});