const fs = require('fs');
function writefile(path){
    return new Promise((resolve, reject)=>{
        fs.writeFile(path,'hello     world    my    name   is   B',((err, content)=>{
            if(err){
                reject("Error");
            } else{
                resolve("resolved");
            }
        }))
    })
}
writefile('b.txt').then((data)=>{
    console.log(data);
})


function readfile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, content) => {
        if (err) {
          reject(err);
        } else {
            let contentTrim = content.replace(/\s+/g, ' ');
          resolve(contentTrim);
        }
      });
    });
  }
  
  readfile('b.txt').then((data) => {
    console.log(`Received data: ${data}`);
  }).catch((err) => {
    console.error(`Caught error: ${err}`);
  });