


function setup(){
 var num = 64
 console.log(num);
 
 var name  = "Shreyas"
 console.log(name);
 console.log(name.length);
 console.log(name.toUpperCase());
 console.log(2+2);
 console.log(69-9);
 console.log(9*9);
 console.log(125/5);
 console.log(5 % 3);
 console.log(6 % 3);
 console.log(7 % 3);
 console.log(name + " hi");
 console.log(1/0);
 console.log(name%" Decent");
 console.log(3*4/2===6*3-12);
 if(name + " Shreyas"){
  console.log("hi");
 }

 switch(name){
   case "Shlok":
     console.log(name);
     break;
     case "Shreyas":
       console.log(name);
       break;
       default:
         break;

 }

 for(var i = 2; i < 12; i=i+2){
   console.log(i);
 }
var n = 1;
 while(n<10){
console.log(n);
n = n+2;
 }

 arrays = [1,2,3,4,5];
 arr = [7,8,9,10]
 arra = [arrays,arr];
 console.log(arra[1][3]);
 var cir = circumference(4);
 console.log(cir);
 console.log(areaRectangle(7,8));
}

function draw(){

}

function circumference(radius){
  var c = 2*3.14*radius;
  return c;
}

function areaRectangle(l,w){
  var a = l*w;
  return a;
}