

function wait1(t) {
return new Promise((resolve, reject)=>{
    let startTime = Date.now();
    setTimeout(()=>{
        let endTime = Date.now();
        let timeTaken = endTime - startTime;
        resolve({result:`Wait1 resolved!, Wait1 took ${timeTaken}!`, timeTaken});
    },t)
})
}

function wait2(t) {
    return new Promise((resolve, reject)=>{
        let startTime = Date.now();
        setTimeout(()=>{
            let endTime = Date.now();
            let timeTaken = endTime - startTime;
            resolve({result:`Wait2 resolved!, Wait2 took ${timeTaken}!`, timeTaken});
        },t)
    })
}

function wait3(t) {
    return new Promise((resolve, reject)=>{
        let startTime = Date.now();
        setTimeout(()=>{
            let endTime = Date.now();
            let timeTaken = endTime - startTime;
            resolve({result:`Wait3 resolved!, Wait3 took ${timeTaken}!`, timeTaken});
        },t)
    })
}

async function calculateTime(t1, t2, t3) {
    let startTime = Date.now();
    await wait1(t1*1000).then((result)=>{
        console.log(result);
    })
    await wait2(t2*1000).then((data)=>{
        console.log(data);
    })
    await wait3(t3*1000).then((data)=>{
        console.log(data);
    })
    let endTime = Date.now();
    const total = endTime - startTime;
    console.log(`Total time taken ${total}`);
    return total;
    
    
   
}

// calculateTime(1000, 1000, 1000).then((data) => {
//     console.log(data);
// });

module.exports = calculateTime;