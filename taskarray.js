console.log("*****Now i am going to code of arrays tasks*****");
console.log("****First task that make array in which 5 elements stores");
let element=["Apple","Banana","Orange","Watermellon"];
console.log(element);
console.log("****Now I am doing the Second Task take elements in the array and sum all numbers****");
let number=[1,2,13,14,56,78];
let sum=0;
for(i=0;i<number.length;i++){
    sum= sum  +number[i];
}
console.log(sum);
let numbers = [10, 20, 30, 40, 50];

let sums = 0;

for(let i = 0; i < numbers.length; i++){
    sums = sums + numbers[i];
}

console.log(sums);
console.log("****Now i am doing the task numbers w find which number is largest****")


let arr = [12, 45, 7, 89, 23];

let largest = arr[0];

for(let i = 0; i < arr.length; i++){
    
    if(arr[i] > largest){
        largest = arr[i];
    }

}

console.log(largest);