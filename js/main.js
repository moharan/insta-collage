//index.html
var elemento = document.getElementsByClassName("go")[0];
elemento.addEventListener("click", validacion);

function validacion() {
    // datos desde formulario
    var nombre = document.getElementById("exampleInputName2").value;
    var password = document.getElementById("exampleInputEmail2").value;


    if (nombre == null || nombre.length == 0 || nombre === " " || password == null || password.length == 0 || password === " ") {
        console.log(nombre + " Esta vacio");
        alert("No puedes dejar campos vacios");
    } 
    if (password !== " ") {
        if (password.length < 6 ||  password === "123456") {
        console.log(password + " es una de las limitantes del ejercicio");
        alert("Debes escoger otra contraseña");
    	}
    }
    if (!(nombre == null || nombre.length == 0 || nombre === " " || password == null || password.length == 0 || password === " ") && !(password.length < 6 ||  password === "123456")) {
 		//
 		window.location.href = "instagram.html";
    }
};
//instagram.html
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

