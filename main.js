

let resultado = 0;
let dolarBlue = 189;
let real = 37;
let euro = 203;
let opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro")) 



while( opcion != 1 && opcion != 2 && opcion != 3 ){

    alert("Por favor, eliga alguna de las siguientes opciones")
    opcion = parseInt(prompt("Eliga el tipo de cambio: 1. Dolar 2. Real 3. Euro"));

}

function cotizar(){

    let valor = parseInt(prompt("Ingrese un monto a cotizar el cambio: "))

    if(opcion == 1){
    resultado = valor / dolarBlue;
    alert("El cambio de pesos a dolares es: $ " + resultado)
    }
    else if(opcion == 2){
    resultado = valor / real;
    alert("El cambio de pesos a reales es: $ " + resultado)
    }
    else if(opcion == 3){
    resultado = valor / euro;
   alert("El cambio de pesos a euros es: € " + resultado)
    }


}



cotizar();

