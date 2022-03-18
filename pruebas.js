let ecuacion = "4-7+8+9/2*3"
let ecuacionArray = ecuacion.split('');
console.log(ecuacionArray)
let index = ecuacionArray.indexOf("/");
console.log(index)
console.log(ecuacionArray)
ecuacionArray.splice(index-1, 3,"resultado");
console.log(ecuacionArray)
















// calculated(size, Arrequation){
//     while (size != 1){
//         let currentSize = size
//         let chill = 0
//         for (let i = 0;  i < currentSize; i++){
//             if ((Arrequation[i] == "/" ) || (Arrequation[i] == "*")){
//                 let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
//                 Arrequation[i] == "*" ? chill = Operacion.multiplicacion(n1, n2) : chill = Operacion.division(n1, n2)
//                 equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
//                 return equationUpdate;
              
//             }else if((Arrequation[i] == "+" ) || (Arrequation[i] == "-")){
//                 let n1 = Arrequation[i-1], n2 = Arrequation[i+1]
//                 Arrequation[i] == "*" ? chill = Operacion.multiplicacion(n1, n2) : chill = Operacion.division(n1, n2)
//                 equationUpdate = Arrequation.splice(i-1, 3,chill.toString());;
//                 return Arrequation=equationUpdate;
//             }
//     }
//     }
//     return Arrequation
// }