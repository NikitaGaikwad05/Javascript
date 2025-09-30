var areaSquare="circle";
var a=5;
var b=10;
var result;
switch(areaSquare){
    case "square":
        result=a*a;
        console.log(result);
        break;
    case "rectangle":
        result=a*b;
        console.log(result);
        break;
    case "circle":
        var r=2;
        result=3.14*(r*r);
        console.log(result);
        break;
    default:
        console.log("youn enter the wrong choice");
}
