n1 = "2", n2 = "3"
res = n1/n2
console.log(res)
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
console.log(roundToTwo(res))
const redondeaar = (num) => {return parseFloat(Math.round(num * 100) / 100).toFixed(2)}
console.log(redondeaar(res))
console.log(+(Math.round(4.799 + "e+2")  + "e-2"))

let ecuacion = "4-7+8+9/2*3"
ecuacion.split('')

// static redondeaar = (num) => {return parseFloat(Math.round(num * 100) / 100).toFixed(2)}

// let suma= (a,b)=> { return a+b }
// let division= (a,b)=> { return a+b }
// let multiplicacion= (a,b)=> { return a+b }
// let resta= (a,b)=> { return a+b }