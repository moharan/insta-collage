//alert("existe");
function principal() {
    var elemento = document.getElementsByClassName("go")[0];
    elemento.addEventListener("click", accion);
};

function accion() {
    alert("funciona");
};
