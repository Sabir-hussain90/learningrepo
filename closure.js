function adder(num){
    function add(b){
        console.log(num+b)
    }
return add;
}
const addto5=adder(5);
console.log("*****It is the code of addto5 function****")

addto5(2);
console.log("****This is the code of the addto45****");
const addto45=adder(45);
addto45(4);
console.log("This is the code of addto690****")
const addto690=adder(690);
addto690(456);