const arr=[1,2,2,3]
const nik=createorder(arr);
const niku=nik.then(function(orderid){
    console.log(orderid)
    return orderid;
    
})
niku.then(function(orderid){
    console.log(orderid*4)
})
.catch(function(err){
    console.log(err.message)


})

function createorder(cart ){
   const m= new Promise(function(resolve,reject){

    if(validate()){
        const err=new Error("lknvklnkdfnfkndflbnldfnblndflkbnkl")
        reject(err);

      

    }
    let orderid=3234435435
    if(orderid){

        resolve(orderid)
    }



    })
    return m
}
function validate(){
    return false;
}