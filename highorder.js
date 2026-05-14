function add(a,b,cb){
    let result=a+b;
    cb(result)

}
function showresult(result){
    console.log(result);
}
add(3,0,showresult);