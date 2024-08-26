// Crea un objeto Date para la fecha : Feb 20, 2012, 3:12 am. Deberá formatear la hora para que muestre la que aquí se le indica 

const fecha = new Date('February 20, 2012 03:12:00')

const formatear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short', 
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true 
})

const formateado = formatear.format(fecha)

console.log(formateado)