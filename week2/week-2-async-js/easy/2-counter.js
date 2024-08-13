
function count() {
    let counter = 0;
    setTimeout(() => {
        while(true){
            if(counter != 100){
                counter++;
                console.log(counter);
                count();
            }
            
        }
    }, 1000);
  }
  
  count();


