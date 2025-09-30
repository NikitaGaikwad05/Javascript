/* calculate the sum of 1 to 10 using the for lop

let sum=0;
for(var i=1;i<=10;i++){
    sum=sum+i;
}console.log(sum);


*/
/*check the given number is prime or not
var num=13;
var isprime=true;
for(var i=2;i<num;i++){
    if(num%i==0){
        isprime=false;
        break;
    }
}
if(isprime){
    console.log("Number is prime");
} else{
    console.log("Number is not prime");
}
    */


//create the tableof 8,9,12,15;

for(var i=1;i<=10;i++){
    console.log(i*8);
}


//for the 9 same logic for all table
for(var i=1;i<=10;i++){
    console.log(i*9);
}

//given year is leapor not
var year=2004;
if((year%4===0 && year%100 !=0) || (year%400==0)){
    console.log("Year is leap year");
}else{
    console.log("year is not leap ");
}
// pattern display
for(var i=1;i<=5;i++){
    var pattern=" ";
    for(var j=1;j<=i;j++){
       pattern=pattern+" * ";
    }
     console.log(pattern);
}