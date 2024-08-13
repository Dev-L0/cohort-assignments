
 function sleep(ms){
    return new Promise((resolve, reject)=>{

        let start = Date.now();
        setTimeout(()=>{
            while(Date.now() - start < ms){
            }
            resolve();
        },ms)
        
    })
} 
// sleep(1000).then((data)=>{
//     console.log(data);
// })


module.exports = sleep;