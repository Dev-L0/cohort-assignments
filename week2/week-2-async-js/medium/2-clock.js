function clock(){
    setInterval(()=>{
    let date = new Date().toLocaleTimeString();
    console.log(date);   
    },1000)
}

clock();