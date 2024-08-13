 const fs = require('fs');

 for(let i =0; i<=100; i++){
    let count =0;
    count+=i;
    console.log(count);
}

fs.writeFile('b.txt', 'Hello from write-to-file!',((err)=>{
    if(err){
        console.log(err);
    }
    console.log("File written successfully!");
}))

for(let i =0; i<=100; i++){
    let count =0;
    count+=i;
    console.log(count);
}


// function writefile(path){
//     return new Promise((resolve, reject)=>{
//        fs.writeFile('b.txt', 'Hello world2! written', ((err)=>{
//         if(err){
//             reject("Error");
//         } else {
//             console.log("File written successfully\n");
//             fs.readFile('b.txt','utf-8', ((err,content)=>{
//                 if(err){
//                     reject("Error");
//                 } else {
//                     resolve(content);
//                 }
//             }))
            
//         }
//        }))
//     })
// }

// writefile('b.txt').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })