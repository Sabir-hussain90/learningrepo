
(function add(a,b){
    console.log(a+b);
})(56,56);

console.log("*****now i can creating a new IIFE function ****");

(function say(){
    console.log("hay how are you");
})();

console.log("****We can use this to another way which way is given below***");

const value = (() => "hey there is another way of IIFE")();

console.log(value);

console.log("****We take the example of the ATM withdraw***");

const atm = function(initialbalance){

    let balance = initialbalance;

    function withdraw(amt){

        if(amt > balance){
            return "your balance is low";
        }
        else{
            balance -= amt;
            return balance;
        }
    }

    return { withdraw };

};

const sabir = atm(1000);

console.log(sabir.withdraw(100));