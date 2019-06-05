const residuo = require('./calculaResiduo')
let numeroFinal = []
function conversorRecursivo(numero,base){
    //let numeroFinal = []
    let resultado = numero/base

    //console.log(residuo(numero,base))
    if(resultado === 0){
        console.log("0")
    }else{
        resultado = Math.floor(resultado)
        if (resultado===0){
            numeroFinal.push(numero)
            console.log(numeroFinal.reverse().join(""))
            return 
         }else{
             numeroFinal.push(residuo.calculaResiduoConversion(numero,base))
             return conversorRecursivo(resultado,base)
         }
    }
}
module.exports = conversorRecursivo
//conversorRecursivo(8,2,[])