function conversor(num,sistema){
  
    let numeroFinal =[]
    let numeroFinalReversa = []
    for(i = 0; num>0; i++ ){
        residuo = num%sistema
        //console.log("residuo antes de convertir " + residuo)
        switch(residuo){
            case 10:
                residuo = "A"
                break
            case 11:
                residuo = "B"
                break
            case 12:
                residuo = "C"
                break
            case 13:
                residuo = "D"
                break
            case 14:
                residuo = "E"
                break
            case 15:
                residuo = "F"
                break
            default:
                residuo = residuo
                break 
        }
        //console.log("residuo: " + residuo)
        
        numeroFinal[i] = residuo
        num=Math.floor(num/sistema)
        //console.log("numero: " + num)
    }
    console.log(numeroFinal.reverse().join(""))
    
}

module.exports = conversor
//conversor(1256,16)


