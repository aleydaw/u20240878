const { setTimeout } = require("timers");

// correo
let correoElectronico = "emely@gmail"
function correo(gmail) {
    return new Promise((resolve, reject) => {
        console.log("Verificando entrega")
        setTimeout(()=>{
            if (gmail == correoElectronico) {
                resolve("Correo enviado a "+gmail);
            } else {
                reject("Direccion de correo no proporcionada");
            }
        },2000)
    });
}

correo(correoElectronico)
    .then(res => {
        console.log(`Mensaje: ` + res);
    })
    .catch(error => {
        console.log(`Error: ` + error);
    });