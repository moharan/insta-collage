//index.html
var elemento = document.getElementsByClassName("go")[0];
elemento.addEventListener("click", validacion);

function validacion() {
    //alert("funciona");
    // validaciones en contenedores 
    var letras = /^[A-Za-z]*$/; /*/^[a-zA-Z ]*$/;/^[0-9]$/*/
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // datos desde formulario
    var nombre = document.getElementById("exampleInputName2").value;
    var password = document.getElementById("exampleInputEmail2").value;
    var resnom = " ";
    var respass = " ";

    if (nombre == null || nombre.length == 0) {
        console.log(nombre + " Esta vacio");
    } else {
        console.log(nombre + " Valido");
        resnom = "valido";
        alert("resnom");
    }

    if (password == null || password.length == 0) {
        console.log(password + " Esta vacio");
    } else if (password < 6 ||  password == "123456") {
        console.log(password + " es una de las limitantes del ejercicio");
    } else {
        console.log(password + " Valido");
        respass = "valido";
        alert("respass");
    }

    if (resnom == "valido" || respass == "valido") {
    // ruta actual
    var partes = window.location.href.split("/");
    partes[partes.length - 1] = "instagram.html";
    window.location.href = partes.join("/");
    console.log(partes);
    alert("resulto");
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

