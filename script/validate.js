// función que guarda los datos en una tabla desde un formulario
//VALIDACION DE DATOS PARA CONDICIONANTES

var letSave = false;
var validaError = false;

function guardar() {

    var id_vent = document.getElementById("ventana").value;

    if (id_vent == "V-01") {
        var a = document.getElementById("ancho").value;

        var h = document.getElementById("altura").value;

        if (a >= 0.2 && a <= 10) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho invalido para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }

        console.log("valor del guardado " + letSave);

        if (letSave == true && h >= 0.5 && h <= 2) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura invalida para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }

    }

    else if (id_vent == "V-02") {
        var a = document.getElementById("ancho").value;

        var h = document.getElementById("altura").value;

        if (a >= 0.2 && a <= 2) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho invalido para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }

        console.log("valor del guardado " + letSave);

        if (letSave == true && h >= 0.5 && h <= 2) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura invalida para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-03") {
        var a = document.getElementById("ancho").value;

        var h = document.getElementById("altura").value;

        if (a >= 0.2 && a <= 2) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho invalido para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }

        console.log("valor del guardado " + letSave);

        if (letSave == true && h >= 0.5 && h <= 2) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura invalida para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }
    }

    else if (id_vent == "V-04") {
        var a = document.getElementById("ancho").value;

        var h = document.getElementById("altura").value;

        if (a >= 0.2 && a <= 2) {
            a;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Ancho invalido para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }

        console.log("valor del guardado " + letSave);

        if (letSave == true && h >= 0.5 && h <= 2) {
            h;
            letSave = true;
            validaError = true;
        }
        else {
            alert("Altura invalida para el tipo de ventana elegida");
            letSave = false;
            validaError = false;
        }
    }



    if (letSave == true) {

    var window = document.getElementById("ventana").value;
    var cant = document.getElementById("cantidad").value;
    var ancho = document.getElementById("ancho").value;
    var altura = document.getElementById("altura").value;
    var cFijos = document.getElementById("cFijos").value;
    var numProy = document.getElementById("numProy").value;
    var numVert = document.getElementById("numVert").value;
    var anchoProy = document.getElementById("anchoProy").value;
    var altoProy = document.getElementById("altoProy").value;
    var espVidrio = document.getElementById("espVidrio").value;
    var area = ancho * altura;

    var fila = "<tr><td>" + window + "</td><td>" + cant + "</td><td>" + ancho + "</td><td>" + altura + "</td><td>" + cFijos + "</td><td>" + numProy + "</td><td>" + numVert + "</td><td>" + anchoProy + "</td><td>" + altoProy + "</td><td>" + espVidrio + "</td><td>" + area + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablita").appendChild(btn);
    }
}

// FIN función guarda datos en tabla desde formulario

// Muestra formulario al dar clic en la ventana (en realidad se da clic en el span overlay)
//y tambien cierra el formulario (que es una sección activa en el hrtml) al dar clic en cancelar

var fr1 = document.getElementById("fv1");
var fr2 = document.getElementById("fv2");
var fr3 = document.getElementById("fv3");
var fr4 = document.getElementById("fv4");

fr1.addEventListener("click", showForm);
fr2.addEventListener("click", showForm);
fr3.addEventListener("click", showForm);
fr4.addEventListener("click", showForm);

function showForm(){
    var contenedor = document.getElementById("datos");
    contenedor.style.display = "block";
    return true;
}

var can = document.getElementById("btn_cancel");
can.addEventListener("click", hideForm);

function hideForm() {
     var contenedor = document.getElementById("datos");
     contenedor.style.display = "none";
    return true;
 }

// FIN mostrar formulario de datos

// copio en valor del input de las ventanas para obtener su nombre por defecto y procedo a copiar
// ese dato dentro del primer input del formulario general para tener el nombre de la ventana elegida

var copyName1 = document.getElementById("fv1");
copyName1.addEventListener("click", copia_nombre1);

var copyName2 = document.getElementById("fv2");
copyName2.addEventListener("click", copia_nombre2);

var copyName3 = document.getElementById("fv3");
copyName3.addEventListener("click", copia_nombre3);

var copyName4 = document.getElementById("fv4");
copyName4.addEventListener("click", copia_nombre4);

function copia_nombre1() {
    var texto1 = document.getElementById("v1").value;
    document.getElementById("ventana").value=texto1;
    // console.log("esto se copiara en formulario de ventana "+texto);
 }

function copia_nombre2() {
    var texto1 = document.getElementById("v2").value;
    document.getElementById("ventana").value = texto1;
    // console.log("esto se copiara en formulario de ventana "+texto);
}

function copia_nombre3() {
    var texto1 = document.getElementById("v3").value;
    document.getElementById("ventana").value = texto1;
    // console.log("esto se copiara en formulario de ventana "+texto);
}

function copia_nombre4() {
    var texto1 = document.getElementById("v4").value;
    document.getElementById("ventana").value = texto1;
    // console.log("esto se copiara en formulario de ventana "+texto);
}

// FUNCIONES QUE OCULTAN Y MUESTRAN ELEMENTO POR BOTON
// function ocultar() {
//     document.getElementById('oculta').style.display = 'none';
// }

// function mostrar() {
//     document.getElementById('obj2').style.display = 'block';
// }

// function comprobar() {
//     var nombre = document.formuV1.cantidad.value;
//     var edad = document.formu.edad.value;

//     if (cantidad.value > 30) {
//         alert("Cantidad no válida");
//         return false;
//     }

//     if (edad >= 20 && edad <= 40) {
//         alert("Si tienes entre 20 y 40 años, no puedes usar este programa.");
//         return false;
//     }

//     return true;
// }

//FUNCION QUE ACUMULA LOS VALORES POR VENTANA PARA CALCULAR RECETA DE ALUMINIO
var totCant = 0;
var totAncho = 0;
var totAlt = 0;
var totCpFijos = 0;
var totProy = 0;
var totAnchoP = 0;
var totAltoP = 0;

function almacena() {

    if (validaError == true) {  
        var marco = 0;
        var inter = 0;
        var junq = 0;
        var ancla = 0;
        var hoja = 0;

        var id_vent = document.getElementById("ventana").value;

        if (id_vent == "V-01") {

        var c = parseInt(document.getElementById("cantidad").value);
        totCant += c;

        var a = parseFloat(document.getElementById("ancho").value);
        totAncho += a;

        var h = parseFloat(document.getElementById("altura").value);
        totAlt += h;

        var b = parseFloat(document.getElementById("cFijos").value);
        totCpFijos += b;

        var p = parseFloat(document.getElementById("numProy").value);
        totProy += p;

        //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO+ALTURA)
        marco = totCant * 2 * (totAncho + totAlt);
        marcop.innerHTML = marco;

        //INTERMEDIO = CANTIDAD*((No.CUERPOSfIJOS + No.Proy)-1)*ALTO
        inter = totCant * ((totCpFijos + totProy) - 1) * totAlt;
        interp.innerHTML = inter;

        //JUNQUILLO = MARCO PROYECTABLE + 2 * INTERMEDIO
        junq = marco + 2 * inter;
        junqp.innerHTML = junq;

        //ANCLA = CANTIDAD * (4+4 * No.Proy) * 0,042
        ancla = totCant * (4 + 4 * totProy) * 0.042;
        anclap.innerHTML =  ancla;

        // console.log("total marco "+marco);
        }

        //Formulas para ventanas 2 - 3 -4

        else if (id_vent == "V-02") {

            var c = parseInt(document.getElementById("cantidad").value);
            totCant += c;

            var a = parseFloat(document.getElementById("ancho").value);
            totAncho += a;

            var h = parseFloat(document.getElementById("altura").value);
            totAlt += h;

            var b = parseFloat(document.getElementById("cFijos").value);
            totCpFijos += b;

            var p = parseFloat(document.getElementById("numProy").value);
            totProy += p;

            var ap = parseFloat(document.getElementById("anchoProy").value);
            totAnchoP += ap;

            var hp = parseFloat(document.getElementById("altoProy").value);
            totAltoP += hp;

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO+ALTURA)
            marco = totCant * 2 * (totAncho + totAlt);
            marcop2.innerHTML = marco;

            //MARCO DE HOJA = CANTIDAD * NO.PROY  * (2*(ANCHO_PROY+ALTO_POY))
            hoja = totCant * totProy * (2 * (totAnchoP + totAltoP));
            hojap2.innerHTML = hoja;

            //INTERMEDIO = CANTIDAD*((No.CUERPOSfIJOS + No.Proy)-1)*ALTO
            inter = totCant * ((totCpFijos + totProy) - 1) * totAlt;
            interp2.innerHTML = inter;

            //JUNQUILLO = MARCO PROYECTABLE + 2 * INTERMEDIO
            junq = marco + 2 * inter;
            junqp2.innerHTML = junq;

            //ANCLA = CANTIDAD * (4+4 * No.Proy) * 0,042
            ancla = totCant * (4 + 4 * totProy) * 0.042;
            anclap2.innerHTML = ancla;

            console.log("total hoja "+hoja);
        }

        else if (id_vent == "V-03") {

            var c = parseInt(document.getElementById("cantidad").value);
            totCant += c;

            var a = parseFloat(document.getElementById("ancho").value);
            totAncho += a;

            var h = parseFloat(document.getElementById("altura").value);
            totAlt += h;

            var b = parseFloat(document.getElementById("cFijos").value);
            totCpFijos += b;

            var p = parseFloat(document.getElementById("numProy").value);
            totProy += p;

            var ap = parseFloat(document.getElementById("anchoProy").value);
            totAnchoP += ap;

            var hp = parseFloat(document.getElementById("altoProy").value);
            totAltoP += hp;

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO+ALTURA)
            marco = totCant * 2 * (totAncho + totAlt);
            marcop3.innerHTML = marco;

            //MARCO DE HOJA = CANTIDAD * NO.PROY  * (2*(ANCHO_PROY+ALTO_POY))
            hoja = totCant * totProy * (2 * (totAnchoP + totAltoP));
            hojap3.innerHTML = hoja;

            //INTERMEDIO = CANTIDAD*((No.CUERPOSfIJOS + No.Proy)-1)*ALTO
            inter = totCant * ((totCpFijos + totProy) - 1) * totAlt;
            interp3.innerHTML = inter;

            //JUNQUILLO = MARCO PROYECTABLE + 2 * INTERMEDIO
            junq = marco + 2 * inter;
            junqp3.innerHTML = junq;

            //ANCLA = CANTIDAD * (4+4 * No.Proy) * 0,042
            ancla = totCant * (4 + 4 * totProy) * 0.042;
            anclap3.innerHTML = ancla;

            console.log("total hoja " + hoja);

        }

        else if (id_vent == "V-04") {

            var c = parseInt(document.getElementById("cantidad").value);
            totCant += c;

            var a = parseFloat(document.getElementById("ancho").value);
            totAncho += a;

            var h = parseFloat(document.getElementById("altura").value);
            totAlt += h;

            var b = parseFloat(document.getElementById("cFijos").value);
            totCpFijos += b;

            var p = parseFloat(document.getElementById("numProy").value);
            totProy += p;

            var ap = parseFloat(document.getElementById("anchoProy").value);
            totAnchoP += ap;

            var hp = parseFloat(document.getElementById("altoProy").value);
            totAltoP += hp;

            //MARCO PROYECTABLE = CANTIDAD*2*(ANCHO+ALTURA)
            marco = totCant * 2 * (totAncho + totAlt);
            marcop4.innerHTML = marco;

            //MARCO DE HOJA = CANTIDAD * NO.PROY  * (2*(ANCHO_PROY+ALTO_POY))
            hoja = totCant * totProy * (2 * (totAnchoP + totAltoP));
            hojap4.innerHTML = hoja;

            //INTERMEDIO = CANTIDAD*((No.CUERPOSfIJOS + No.Proy)-1)*ALTO
            inter = totCant * ((totCpFijos + totProy) - 1) * totAlt;
            interp4.innerHTML = inter;

            //JUNQUILLO = MARCO PROYECTABLE + 2 * INTERMEDIO
            junq = marco + 2 * inter;
            junqp4.innerHTML = junq;

            //ANCLA = CANTIDAD * (4+4 * No.Proy) * 0,042
            ancla = totCant * (4 + 4 * totProy) * 0.042;
            anclap4.innerHTML = ancla;

            console.log("total hoja " + hoja);

        }
    }
}
