// variable numero = 5
let numero = 5

function validar(num){
    return new Promise((resolve, reject) =>{
        if(num==numero){
            resolve("Numero válido")
        }else{
            reject("El número no es igual a 5")
        }
    })
}

validar(numero)
.then(res=>{
    console.log(`Mensaje: `+ res)
})
.catch(error =>{
    console.log(`Error: ` + error)
})