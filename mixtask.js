console.log("*****First task in which first print ten number and also tell number which number is odd are even****")

for(let i=1; i<=10; i++){
    if(i%2===0){
        console.log(i+"the number is even")
    }else{
        console.log(i+"The number is odd")
    }
}
console.log("****Task No2:Student Status Check****");
let stname="sabir Hussain"
let marks=89;
if(marks>=80){
    console.log("sabir Hussain Has A+ Grade")
} else if(marks>=33){
    console.log("*****Sabir Hussain Just pass*****");
}else{

    console.log("****sabir Hussain is fail*****")
}
console.log("****Task NO 3: Summ of 1 to 100 *****");
let sum=0
for(i=1;i<=100;i++)
{
    sum=sum+i;
}
console.log("total sum="+sum)
console.log("****Task No:4 password chker*****");
let password =1234;
if(password===8){
    console.log("Pasword is very strong");
}else if(password===4){
    console.log("please try to set stroing password");
}else{
    console.log("password is very week");
}
console.log("*****Task NO4:Bill Payment Caluculator****");
let bill1=345;
let bill2=500;
let bill3=909;
console.log(bill1+bill2+bill3);
 console.log("Task No5:print 10 to 1 number in decrement");
 for(i=10;i>=1;i--){
    console.log(i)
 }
