function calculator(num1,num2,op){
    let result;
    switch(op){
    case "+":
        return num1+num2;
        break;
    case "-":
        return num1-num2;
        break;
    case "*":
        return num1*num2;
        break;
        case "/":
            if(num2===0){
                return "not divisible by zero";
            }else{
                result=num1/num2;
                return result;
            }
    default:return "operator not found";
}

}
console.log(calculator(5,2,"+"));
console.log(calculator(5,4,"-"));
console.log(calculator(4,5,"*"));
console.log(calculator(25,5,"/"));