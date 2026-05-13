 let year = 2025;
 if(year % 4===0)
 {
    console.log("the year is the leap year");
 } else{
    console.log("the year is the not leap year");
 }
 let a=45;
 let b=77;
 let c=1000;
 if(a>b&&a>c){
   console.log("a is the larger number");
 }else if(b>c){
   console.log("b is the largest number");
 }else{
   console.log("c is the largest number");
 }
 let option=2;
 switch(option){
   case 1:{
      console.log("sabir");
   }
   break;
   case 2:{
      console.log("Hussain");

   }break;
   case 3:{
      console.log("Hussssssain");
   }
   break;
 }
 let m=56;
 let opt="*";
 let j=45;
 switch(opt){
   case "+": console.log(m+j);
   break;
   case "-": console.log(m-j);
   break;
   case "*":console.log(m*j);
   break;
   case "/":console.log(m/j);
   break;
   console.log("invalid value");
   console.log("****This is the code of And operators****")
 }
 let average= 21;
 let gender= 'male';
 if(average<=23 && gender=='male')
 {
   console.log("you are complete");
 }
 console.log("****This is the code of OR Operators****");
 let sum=123;
 let aee='we are the going';
 if(sum<=125 || aee=='we are the going'){
   console.log("you are not complete")
 }