function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min+1))+min;
}
const persons=[1,2,3,4,5];

    for (let i=0;i<persons.length;i++){
      let  inf =  new Promise((resolve,reject)=>{
        let ran=random(1,10);
        setTimeout(()=>{
          console.log("person "+persons[i]+ " was going in:");
          resolve("The time consumed was " +ran+" seconds");
          console.log(`Next person go inside`);
          reject("nothing");
        },ran*1000)
        });
        async function myfunction(){
          let wait=await  inf;
          console.log(wait);
        }
        myfunction();

    }
  
    
    



