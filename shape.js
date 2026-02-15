var areaShapes="Square";
var a=5;
var b=10;
var area;
switch(areaShapes){
  case "Square":
        area=a*a;
        console.log("area of suare",area);
        break;
  case "circle":
      var r=3;
      area=3.14*r*r;
      console.log("area of circle",area);
      break;
  case "rectangle":
      area=a*b;
      console.log("area of rectangle",area);
      break;
   default:
    console.log("condition not match");
}
