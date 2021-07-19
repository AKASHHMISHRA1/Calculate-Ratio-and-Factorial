const ratio=require("../ratio/index");
const factorial=require("../factorial/index");
function ratioAndFactorial(num1,num2,num3) {
    const rat=ratio(num1,num2);
    const fac=factorial(num3);
    const obj={ratio:rat,factorial:fac};
    return obj;
}

module.exports=ratioAndFactorial;