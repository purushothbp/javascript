function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min+1))+min;
}
let prompt = require('prompt-sync')();
let persons= prompt('Enter the total no of patients: ');
for(let i=1;i<=persons;i++){
        let  inf =  new Promise((resolve,reject)=>{
            let ran=random(1,10);
            console.log("person "+i+ " was going in.");
            setTimeout(()=>{
                resolve("The time consumed was " +ran+" seconds");
            },ran*1000);
        });
        async function myfunction(){
            let wait=await  inf;
            console.log(wait);
        }
      await  myfunction();
}
    
    
