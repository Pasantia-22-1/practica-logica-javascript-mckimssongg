class Operacion{
    static suma(a,b){ return a+b }
    static division(a,b){return a/b }
    static multiplicacion(a,b){ return a*b }
    static resta(a,b){ return a-b }
}

function sizeOfEquation(equation){
    let size = equation.length
    return size
}

function equationArr(equation){
    ArrayAquation = equation.split('')
    return ArrayAquation
}

function calculated(size, Arrequation){
    while (size != 1){
        let currentSize = size
        let chill = 0
        for (let i = 0;  i < currentSize; i++){
            if ((Arrequation[i] == "/" ) || (Arrequation[i] == "*")){
                let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
                Arrequation[i] == "*" ? chill = Operacion.multiplicacion(n1, n2) : chill = Operacion.division(n1, n2)
                equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
                return equationUpdate;
              
            }else if((Arrequation[i] == "+" ) || (Arrequation[i] == "-")){
                let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
                Arrequation[i] == "*" ? chill = Operacion.multiplicacion(n1, n2) : chill = Operacion.division(n1, n2)
                equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
                return Arrequation=equationUpdate;
            }
    }
    }
    return Arrequation
}

let ecuacion1 = "4-7+8+9/2*3"

let _size = sizeOfEquation(ecuacion1)
console.log(_size)
