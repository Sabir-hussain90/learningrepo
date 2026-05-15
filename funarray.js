const array=["1","hj","lop","2","sikitlearn"];



function print(n){
    console.log(n);

}
array.forEach(print)
console.log("*****This is the code of .MAPFUNCTIONS*****");
const number=[1,34,344,353,43,3435,34343,33,343];
function double(n){
    return(n*2);
}
let newArray=number.map(double)
console.log(newArray);
console.log("*****Now i am doing the two more code of each and map******");
let sajid=["hgj","sabirir","kkere","hey how "];
function add(a){
    console.log(a);
}
array.map(add);
console.log("***This is the code of Map*****");
let arr=[1,23,434,56,343]
function sab(s){
return(s*2);
}
let newarra=arr.map(sab);
console.log(newarra)
console.log("*****This is the code of find*****")
let numberss=[1,2,4,3,35,0]
let ans= numberss.find((ans) => ans===4)
console.log(ans);
console.log("*****Now we are doing the code of the filter array******");
let numbers =[2,4,3,3,4,3,]
const newaaa =numbers.filter((num)=>num%2==0)
console.log(newaaa)
let sds=[1,2,3,4,5,6,7,8,9,10];
let ddd=sds.slice(0,4);
console.log(ddd)
console.log("******Now we do two code for filter*****")
let dds=[1,2,3,4,5,6,7]
const sda=numbers.filter((nu)=>nu%2==1);
console.log(sda)