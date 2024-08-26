let diaSemana = new Date();
let opcion = { weekday: 'short' };

let formatear = new Intl.DateTimeFormat('en-US', opcion);
let dia = formatear.format(diaSemana);

console.log(dia);
