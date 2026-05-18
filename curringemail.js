function sendemail(to) {
    return function(subject) {
        return function(body) {
            console.log(`sending email to ${to} with subject ${subject} with body: ${body}`);
        };
    };
}

let step1 = sendemail("sabir201@gmail.com");
let step2 = step1("the order is confirmed");
step2("Here is something for you");