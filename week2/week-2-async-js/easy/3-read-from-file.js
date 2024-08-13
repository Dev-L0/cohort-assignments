const fs = require("fs");


for(let i =0; i<=100; i++){
   let count =0;
   count+=i;
   console.log(count);
}

fs.readFile('b.txt', 'utf-8',((err, content)=>{
   if(err){
       console.log(err);
   }
   console.log(content);
}))

for(let i =0; i<=100; i++){
   let count =0;
   count+=i;
   console.log(count);
}


// async function readfile(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("b.txt", "utf-8", (err, content) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(content);
//       }
//     });
//   });
// }

// readfile("b.txt").then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
