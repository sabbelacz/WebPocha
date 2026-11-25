function estafarCliente() {
    document.getElementById("botonestafa").innerHTML = "Gracias, le llegara un recibo de 200€";
    document.getElementById("botonestafa").style.fontSize = "8em";
    console.log("el usuario ha sido estafado correctamente");
    document.getElementById("cambiarTexto").style.fontSize = "2em";
    document.getElementById("cambiarTexto").style.color = "#D2E4E0";
}

/* lo pongo asi para que incordio que cada vez que reinicio me sale y es bastante pesado
 window.alert("CUIDADO ESTA PAGUINA ES PELIGROSA PODRIAN O NO ESTAFARTE"); */

function cambiarFoto() {
    document.getElementById("cambiarJuguete").src = "imagenes/laRule/tragaperras.gif";
    console.log("la foto del juguete se cambioo");
}

function cambiarMenu1() {
    document.getElementById("botonCabecera1").style.backgroundColor = "#C730B3";
    document.getElementById("botonCabecera1").style.color = "#F71E1E";
    document.getElementById("botonCabecera1").style.fontSize = "8em";
}

function cambiarMenu2() {
    document.getElementById("botonCabecera2").style.backgroundColor = "#2ED8CA";
    document.getElementById("botonCabecera2").style.color = "#AEC730";
    document.getElementById("botonCabecera2").style.fontSize = "8em";
}

function cambiarMenu3() {
    document.getElementById("botonCabecera3").style.backgroundColor = "#F5310A";
    document.getElementById("botonCabecera3").style.color = "#54F50A";
    document.getElementById("botonCabecera3").style.fontSize = "8em";
}

function alertaCompra() {
    window.alert("Pero vamos a ver que te pensabas que lo ibas a comprar??");
}



