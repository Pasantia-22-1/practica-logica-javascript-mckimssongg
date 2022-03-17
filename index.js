
let ecuacion = "4-7+8+9/2*3"
let ecuacionArray = ecuacion.split('');

console.log(ecuacionArray.length)
console.log(ecuacion.length)

class Calculator{
    static suma(a,b){ return a+b }
    // static redondeaar = (num) => {return parseFloat(Math.round(num * 100) / 100).toFixed(2)}
    static division(a,b){
        resultado=a/b 
        return Calculator.redondeaar(resultado)}
    static multiplicacion(a,b){ return a*b }
    static resta(a,b){ return a-b }
}

let resultado = 0
for (let i = 0;  i < ecuacionArray.length; i++){
    console.log(i)
    console.log(ecuacionArray[i])
    if ((typeof(ecuacionArray[i]) == Symbol) && ((ecuacionArray[i] == "/" ) || (ecuacionArray[i] == "*"))){
        let n1 = ecuacionArray[i-1], n2 = ecuacionArray[i+1]
        ecuacionArray[i] == "*" ? chill = Calculator.multiplicacion(n1, n2) : chill = Calculator.division(n1, n2);
        ecuacionArray = ecuacionArray.splice(n1, n2, chill.toString());
        ecuacionArray = ecuacionArray.splice(n1, n2);        
    }
    else if((typeof(ecuacionArray[i]) == Symbol) && ((ecuacionArray[i] == "+" ) || (ecuacionArray[i] == "-"))){
        let n1 = ecuacionArray[i-1], n2 = ecuacionArray[i+1]
        ecuacionArray[i] == "+" ? chill = Calculator.suma(n1, n2) : chill = Calculator.resta(n1, n2);
        ecuacionArray = ecuacionArray.splice(n1, n2, chill.toString());
        ecuacionArray = ecuacionArray.splice(n1, n2);
    }
    
}
console.log(ecuacionArray)