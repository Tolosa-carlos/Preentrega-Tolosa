

let opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro 4. Libra")) 

const moneda = [
    { nombre: "dolares", precio: 190, sign: "$" },
    { nombre: "realeas", precio: 37, sign: "R$"},
    { nombre: "euros", precio: 203, sign: "€"},
    { nombre: "libras", precio: 229, sign: "£"}
]


while( opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4){

    alert("Por favor, eliga alguna de las siguientes opciones")
    opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro 4. Libra"));

}

function cotizar(){

    let resultado = 0;
    let valor = parseInt(prompt("Ingrese un monto a cotizar: "))


    for ( let i = 0; i < moneda.length; i++)

        if(opcion == 1 && i == 0){
        resultado = valor / moneda[i].precio;
        alert(`El cambio de pesos a ${moneda[i].nombre} es: ${moneda[i].sign}  ${resultado}`)    
        }
        else if(opcion == 2 && i == 1){
        resultado = valor / moneda[i].precio;
        alert(`El cambio de pesos a ${moneda[i].nombre} es: ${moneda[i].sign}  ${resultado}`)
        }
        else if(opcion == 3 && i == 2){
        resultado = valor / moneda[i].precio;
        alert(`El cambio de pesos a ${moneda[i].nombre} es: ${moneda[i].sign}  ${resultado}`)
        }
        else if(opcion == 4 && i == 3){
        resultado = valor / moneda[i].precio;
        alert(`El cambio de pesos a ${moneda[i].nombre} es: ${moneda[i].sign}  ${resultado}`)
        }


}



cotizar();

