//index.html
function principal() {
    var elemento = document.getElementsByClassName("go")[0];
    elemento.addEventListener("click", accion);
};
//instagram.html
function accion() {
    alert("funciona");
};

function drag(evento){
	evento.dataTransfer.setData("text", evento.target.id);
}
function finalDrop(evento) {
	// resetear navegador 
	evento.preventDefault();
}
function drop(evento) {
	// resetear navegador 
	evento.preventDefault();
	// traer datod de Drag
	var dato = evento.dataTransfer.getData("text");
	// objetivo(target) hijo de dato(navegando)
	evento.target.appendChild(document.getElementById(dato));
}
