async function main1(){
async function harry(){
let delhiweather= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("23 deg")
    },2000)
})
let bangloreweather= new Promise((resolve,reject)=>{
         setTimeout(()=>{
        resolve("30 deg")
        },5000)
})
// delhiweather.then(alert);
// bangloreweather.then(alert);
console.log("delhi weather is fetching please wait")
let delhiw= await delhiweather;
console.log("delhi weather is"+delhiw)
console.log("Banglore weather is fetching please wait")
let bangw= await bangloreweather;
console.log("Banglore weather is"+bangw)
return [delhiw, bangw];
}

async function cherry(){
    console.log("Iam cherry Iam waiting")
}

let a= await harry();
let b=await cherry();

}
main1();

 