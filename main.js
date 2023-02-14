
alert("Bienvenido")

const monedas = [
    { nombre: "dolar", precio: 190, sign: "$" },
    { nombre: "real", precio: 37, sign: "R$"},
    { nombre: "euro", precio: 203, sign: "€"},
    { nombre: "libra", precio: 229, sign: "£"}
]


let nombre = prompt("Ingrese la moneda a cotizar: ")
let find = monedas.find(moneda => moneda.nombre === nombre)
let mensaje = `

    Moneda: ${find.nombre}
    Precio: ${find.sign} ${find.precio}

`
alert(mensaje)


let opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro 4. Libra")) 

while( opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4){

    alert("Por favor, eliga alguna de las siguientes opciones")
    opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro 4. Libra"));

}

function cotizar(){

    let resultado = 0;
    let valor = parseInt(prompt("Ingrese un monto a cotizar: "))


    for ( let i = 0; i < monedas.length; i++)

        if(opcion == 1 && i == 0){
        resultado = valor / monedas[i].precio;
        alert(`El cambio de pesos a ${monedas[i].nombre} es: ${monedas[i].sign}  ${resultado}`)    
        }
        else if(opcion == 2 && i == 1){
        resultado = valor / monedas[i].precio;
        alert(`El cambio de pesos a ${monedas[i].nombre} es: ${monedas[i].sign}  ${resultado}`)
        }
        else if(opcion == 3 && i == 2){
        resultado = valor / monedas[i].precio;
        alert(`El cambio de pesos a ${monedas[i].nombre} es: ${monedas[i].sign}  ${resultado}`)
        }
        else if(opcion == 4 && i == 3){
        resultado = valor / monedas[i].precio;
        alert(`El cambio de pesos a ${monedas[i].nombre} es: ${monedas[i].sign}  ${resultado}`)
        }


}



cotizar();

