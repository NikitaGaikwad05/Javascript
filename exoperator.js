//types of oprrator1) assignment ,arithmatic,comparison,logical,string,unary,ternary,type operator;
var mname="nikita";//assignment
let x=5;
let y=10;
let sum=x+y;//Arithmatic operator;
console.log(sum);
let sub=x-y;
console.log(sub);
let mul=x*y;
console.log(mul);
let div=x/y;
console.log(div);
let mod=x%y;
console.log(mod);
//practice 
var result="hello"/2;
console.log(result);//NAN not a number;
//interview question
var result=0.1+0.2;
console.log(result.toFixed(2));//toSized function udes to display the fixed number after the point
var res=0.2+0.2;
console.log(res);
//comparion operator
console.log(5==5);//check only the value
console.log(5==="5");//check the value and datatype;
console.log(5!=5);
console.log(5>4);
console.log(4<5);
console.log(4<=4);
console.log(5>=5);
//logical operator && and || or ! not
var x1=3;
var y1=0;
console.log(x1>0 && y1>0);
console.log(x1>0 || y1<0);
console.log(x1!=y1);
let age=19;
let drivinglience=true;
if(age>=18 && drivinglience==true){
    console.log("Eligible for driving");
}else{
    console.log("Not eligible for driving");
}
//let say you have a variable score representing a
//  students marks if the score is grater and equal to 60 the student passes
//  otherwise they fail use the conditional operator to determine the result and store it in a variable called result
//log the result to the console
   let score=90;
   let sco= score>=60?"pass":"fail";//conditional operator
   console.log(sco);
 
   

   