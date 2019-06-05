import './calculaResiduo.js'

function conversorRecursivo(numero,base){
    let numeroFinal = []
    let resultado = numero/base
    if(resultado === 0){
        console.log("0")
    }else{
        resultado = Math.floor(resultado)
        if (resultado===0){
            numeroFinal.push(numero)
            console.log(numeroFinal.reverse().join(""))
            return 
         }else{
             numeroFinal.push(calculaResiduoConversion(numero,base))
             return conversorRecursivo(resultado,base)
         }
    }
}


conversorRecursivo(1,2)