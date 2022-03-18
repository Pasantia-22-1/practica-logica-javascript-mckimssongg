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
    let ArrayAquation = equation.split('')
    return ArrayAquation
}

// --------------------------------------------------------------------------------------------------------------------------------
function SearchSymbol(ArrayAquation){
    for (let i = 0;  i < ArrayAquation.length; i++){
        if ((ArrayAquation[i] == "/" ) || (ArrayAquation[i] == "*")){
            return i;
        }else if((ArrayAquation[i] == "+" ) || (ArrayAquation[i] == "-")){
            return i;
        }
    }
    return true;
}
    

function Calculate(index, ArrayEquation){
        let n1 = ArrayEquation[index-1], n2 = ArrayEquation[index+1]
        let resultado
        if (ArrayEquation[index] == "*" ){
            resultado = Operacion.multiplicacion(n1, n2)
         }else if(ArrayEquation[index] == "/" ){
             resultado = Operacion.division(n1, n2)
         }else if(ArrayEquation[index] == "+"){
            resultado = Operacion.multiplicacion(n1, n2) 
         }else if(ArrayEquation[index] == "-"){
            resultado = Operacion.resta(n1, n2)
         }
         return resultado
}


function replaceArray(resultado, ArrayEquation, index){
    let equationUpdate = ArrayEquation.splice(index-1, 3,resultado.toString());;
    return equationUpdate
}

// --------------------------------------------------------------------------------------------------------------------------------

let ecuacion1 = "4-7+8+9/2*3"
let siNo = true
if(ecuacion1.length > 20){
    console.log("Faill")
}
else{
    while(siNo){
        let _equation = equationArr(ecuacion1)
        console.log(_equation)
        let _sizeEquation = sizeOfEquation(_equation)
        console.log(_sizeEquation)
        if(_sizeEquation == 1){
        siNo = false 
        console.log(_equation)
        }else{
            let _index = SearchSymbol(_equation)
            console.log(_index)
            if (_index == true){siNo = false}
            else{
                let res = Calculate(_index, _equation)
                _equation = replaceArray(res, _equation, _index)
            }
        }
        console.log(_equation)
    }
    
}

// // --------------------------------------------------------------------------------------------------------------------------------
// function calculated(size, Arrequation){
//     while (size != 1){
//         let currentSize = size
//         let chill = 0
//         for (let i = 0;  i < currentSize; i++){
//             if ((Arrequation[i] == "/" ) || (Arrequation[i] == "*")){
//                 let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
//                 Arrequation[i] == "*" ? chill = Operacion.multiplicacion(n1, n2) : chill = Operacion.division(n1, n2)
//                 equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
//                 return Arrequation=equationUpdate;
              
//             }else if((Arrequation[i] == "+" ) || (Arrequation[i] == "-")){
//                 let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
//                 Arrequation[i] == "+" ? chill = Operacion.suma(n1, n2) : chill = Operacion.resta(n1, n2)
//                 equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
//                 return Arrequation=equationUpdate;
//             }
//     }
//     }
//     return Arrequation
// }
// let ecuacion1 = "4-7+8+9/2*3"

// let _size = sizeOfEquation(ecuacion1)
// console.log(_size)
// let _ArrayAquation = equationArr(ecuacion1)
// console.log(_ArrayAquation)
// let _resultado = calculated(_size, _ArrayAquation)
// console.log(_resultado)