//check the year is leap or not

var year=2024;
if(year%4==0 && year%100!==0 || year%400==0){
    console.log("The year is leap");
    
}else{
    console.log("The year is not leap");
}
