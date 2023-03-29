var fecha = new Date();
var [mes, diaSemana, dia, year] = [
  (mes = fecha.getMonth()),
  (diaSemana = fecha.getDay()),
  (dia = fecha.getDate()),
  (year = fecha.getFullYear()),
];

var [hora, minutos, segundos] = [
  (hora = fecha.getHours()),
  (minutos = fecha.getMinutes()),
  (segundos = fecha.getSeconds()),
];

switch (diaSemana) {
  case 0:
    diaSemana = "Domingo";
    break;
  case 1:
    diaSemana = "Lunes";
    break;
  case 2:
    diaSemana = "Martes";
    break;
  case 3:
    diaSemana = "Miércoles";
    break;
  case 4:
    diaSemana = "Jueves";
    break;
  case 5:
    diaSemana = "Viernes";
    break;
  case 6:
    diaSemana = "Sábado";
    break;
  default:
    diaSemana = "El dia indicado no existe";
}

switch (mes) {
  case 0:
    mes = "Enero";
    break;
  case 1:
    mes = "Febrero";
    break;
  case 2:
    mes = "Marzo";
    break;
  case 3:
    mes = "Abril";
    break;
  case 4:
    mes = "Mayo";
    break;
  case 5:
    mes = "Junio";
    break;
  case 6:
    mes = "Julio";
    break;
  case 7:
    mes = "Agosto";
    break;
  case 8:
    mes = "Septiembre";
    break;
  case 9:
    mes = "Octubre";
    break;
  case 10:
    mes = "Noviembre";
    break;
  case 11:
    mes = "Diciembre";
    break;
  default:
    mes = "El mes indicado no existe";
}

var mensajeAlert = `Hoy es ${diaSemana} ${dia} de ${mes} de ${year}, y son las ${hora}:${minutos}:${segundos} segundos.`;

var dateFuture = new Date(new Date().getFullYear() + 1, 0, 1);
var dateNow = new Date();

var seconds = Math.floor((dateFuture - dateNow) / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);

hours = hours - days * 24;
minutes = minutes - days * 24 * 60 - hours * 60;
seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

var mensajeHasta = `Desde ${Intl.DateTimeFormat("es-ES").format(
  dateNow
)} hasta ${Intl.DateTimeFormat("es-ES").format(
  dateFuture
)} quedan exactamente: ${days} dias, ${minutes} minutos y ${seconds} segundos.`;

function mostrarFecha() {
  alert(mensajeAlert);

const div = document.getElementById("tiemporestante");
div.classList.replace("invisible", "visible");
const paragraph = document.createElement("p");

paragraph.textContent = mensajeHasta;

div.appendChild(paragraph);

}
