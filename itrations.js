console.log("****In this code i am going to iterations in JavaScript*****");

for (let value of [1,2,3,54]) {
    console.log(value);
}

console.log("**** now i see how can create self iterators*****");

function MakeIterator(start = 0, end = Infinity, step = 1){

    let nextstart = start;
    let iterarionCount = 0;

    return {
        next(){

            let result;

            if(iterarionCount < end){

                result = {
                    value: nextstart,
                    done: false
                };

                nextstart = nextstart + step;
                iterarionCount++;

                return result;
            }

            return {
                value: iterarionCount,
                done: true
            };
        }
    };
}

const iterator = MakeIterator(1,10,1);

let result = iterator.next();

while(!result.done){

    console.log(result.value);

    result = iterator.next();
}