
function wait(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
                resolve();
  
        },n*1000)
    })
}

wait(1000).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

module.exports = wait;