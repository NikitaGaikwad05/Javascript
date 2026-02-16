//Check if number is prime or not

var num=13;
var isPrime=true;
for(var i=2;i<num;i++){
    if(num%i===0){
        isPrime=false;
        break;
    }
    
}
if(isPrime){
    console.log("Number is prime");
}else{
    console.log("number not prime");
}
