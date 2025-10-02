// Genera el enunciado de la ventana emergente.
alert('Imagínate que eres Harry Potter y llegas al Gran Comedor de Hogwarts en una noche especial: las banderas de las cuatro casas flotan en el aire. Dumbledore ha preparado un reto para poneros a prueba. Debes elegir bien los hechizos y banderas que te representarán.');

//Ponemos primero las respuestas para cada pregunta (banderas y conjuros)
let bandera = prompt("Elige una bandera:\n1. Gryffindor\n2. Ravenclaw\n3. Slytherin");
let conjuro = prompt("Elige un hechizo:\n1. Lumos máxima (conjuro de luz)\n2. Expecto Patronum (conjuro contra dementores)\n3. Avada Kedavra (conjuro de la maldición asesina)");

// Mi desarrollo con if
if (bandera == "1" && conjuro == "1") {
    alert("La bandera de Gryffindor brilla con la fuerza de Lumos máxima.");
} else if (bandera == "1" && conjuro == "2") {
    alert("Un Patronus protege la bandera de Gryffindor. ¡Reto superado con valentía!");
} else if (bandera == "1" && conjuro == "3") {
    alert("El uso de Avada Kedavra oscurece la bandera de Gryffindor. El Gran Comedor queda en silencio...");
} else if (bandera == "2" && conjuro == "1") {
    alert("La luz de Lumos máxima resalta la sabiduría de Ravenclaw.");
} else if (bandera == "2" && conjuro == "2") {
    alert("El Patronus envuelve la bandera de Ravenclaw con protección mágica.");
} else if (bandera == "2" && conjuro == "3") {
    alert("Avada Kedavra apaga el brillo de Ravenclaw. Los estudiantes se horrorizan.");
} else if (bandera == "3" && conjuro == "1") {
    alert("La bandera de Slytherin resplandece con un verde intenso bajo Lumos máxima.");
} else if (bandera == "3" && conjuro == "2") {
    alert("Un Patronus serpentea alrededor de la bandera de Slytherin. Extraño, pero poderoso.");
} else if (bandera == "3" && conjuro == "3") {
    alert("La maldición asesina tiñe la bandera de Slytherin con oscuridad. ¡Has fracasado!");
} else {
    alert("No has escogido una opción válida (te he pillado ;).");
}
