export function calculaResiduoConversion(residuo,base){
    let resultado = residuo%base
    console.log("modulo: " + resultado)
    let letra = ""
    switch(resultado){
        case 10:
            letra = "A"
            return letra
        case 11:
            letra = "B"
            return letra
        case 12:
            letra = "C"
            return letra
        case 13:
            letra = "D"
            return letra
        case 14:
            letra= "E"
            return letra
        case 15:
            letra = "F"
            return letra
            break
        default:
            letra = resultado + ""
            return letra
    }
}
