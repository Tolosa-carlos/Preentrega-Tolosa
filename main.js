

let resultado = 0;
let opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro")) 



function Moneda(data){
    this.moneda = data.moneda
    this.precio = data.precio
    this.sign = data.sign
}

const dolar = new Moneda({
    moneda: "Dolar", 
    precio: 377, 
    sign: "$"
})

console.log(dolar.precio)

const real = new Moneda({
    moneda: "Real", 
    precio: 37, 
    sign: "R$"})
const euro = new Moneda({
    moneda: "Euro", 
    precio: 203, 
    sign: "€"
})





while( opcion != 1 && opcion != 2 && opcion != 3 ){

    alert("Por favor, eliga alguna de las siguientes opciones")
    opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro"));

}

function cotizar(){

    let valor = parseInt(prompt("Ingrese un monto a cotizar: "))

    if(opcion == 1){
    resultado = valor / dolar.precio;
    alert("El cambio de pesos a dolares es: " + dolar.sign + resultado)    }
    else if(opcion == 2){
    resultado = valor / real.precio;
    alert("El cambio de pesos a reales es: " + real.sign + resultado)
    }
    else if(opcion == 3){
    resultado = valor / euro.precio;
    alert("El cambio de pesos a euros es: " + euro.sign + resultado)
    }


}



cotizar();

