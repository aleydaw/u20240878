// Función para calcular la diferencia en días
function calcular(fecha1, fecha2) {
    const Fecha1 = Date.UTC(fecha1.getFullYear(), fecha1.getMonth(), fecha1.getDate());
    const Fecha2 = Date.UTC(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate());

    const diferenciaMs = Fecha2 - Fecha1;

    const msPorDia = 1000 * 60 * 60 * 24;
    const diferenciaDias = diferenciaMs / msPorDia;

    return diferenciaDias;
}

// Definimos las dos fechas
const fecha1 = new Date('July 25, 2024');
const fecha2 = new Date('August 25, 2024');

const diferencia = calcular(fecha1, fecha2);
console.log(`La diferencia entre ${fecha1.toDateString()} y ${fecha2.toDateString()} es de ${diferencia} días.`);
