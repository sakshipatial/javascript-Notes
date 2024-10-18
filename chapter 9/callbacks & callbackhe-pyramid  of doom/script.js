 //syncronous programming
//  let a="my name is sakshi";
//  let b="iam a girl"
//  console.log(`${a} ${b}`);

 //asycronous programming
console.log("start");
setTimeout(function(){
    console.log("Iam a good student")
},3000)// this line is scheduled and thrown in background
console.log("end");

// CALLBACK FUNCTION  AND ERROR HANDLING
// function loadScript(src,callback)  {
// var script=document.createElement("script");
// script.src=src;
// script.onload=function(){
//     console.log(src);
//     callback(null,src);
// }
// script.onerror=function(){
//   console.log("error loading script with src="+src);
//   callback(new Error("src got some error"))
// }
// document.body.appendChild(script);
// }   
// function hello(Error,src){
//     if(Error){
//         console.log(Error);
//     }
    
//     alert("hello"+src);

// }
// function goodMoring(){
// alert("good morning");
// }
// loadScript("https://cdn.jsdelivr1.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello(error,src))



//WHY WE SHOULD NOT USE CALLBACKS . DRAWBACKS 
// CALLBACK HELL AND  PYRAMIDOF DOOM

function loadScript(src,callback)  {
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log(src);
        callback(null,src);
    }
    script.onerror=function(){
      console.log("error loading script with src="+src);
      callback(new Error("src got some error"))
    }
    
    
    document.body.appendChild(script);
    }   
   
    loadScript("https://cdn.jsdelivr1.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function hello(error,src){
        if(Error){
            console.log(Error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("https://cdn.jsdelivr1.net/npm/bootstrap2@5.3.3/dist/js/bootstrap.bundle.min.js",function hello(error,src){
            if(Error){
                console.log(Error);
                sendEmergencyMessageToCeo();
                return;
            }
        })
        loadScript("https://cdn.jsdelivr1.net/npm/bootstrap2@5.3.3/dist/js/bootstrap.bundle.min.js",function hello(error,src){
            if(Error){
                console.log(Error);
                sendEmergencyMessageToCeo();
                return;
            }
        })
        loadScript("https://cdn.jsdelivr1.net/npm/bootstrap2@5.3.3/dist/js/bootstrap.bundle.min.js",function hello(error,src){
            if(Error){
                console.log(Error);
                sendEmergencyMessageToCeo();
                return;
            }
        })
    //  what we are doing here if bootstrap1 is loaded then load the second bootstrap and then if secone is loaded then load the next and so on and so on.our code grow on  a horizontl direction. this is called as callback hell. 
    // so what you have to do, you have to use promises.
    })
/**  SO LOADCRIPT IS A FUNCTION WHOM I TOLD to load the script and when the script is loaded ,run hello callback.but suppose that when the script does not run,then a very big dissaster will happen and what will we do in that disaster?
sol----------- we will send an emergency message to CEO .we run sendEmergencyMessageToCeo() method. what does this method do?
Answer--------- this method wakes up the sleeping ceo of our company,and tell him that your companies have a very huge error.so loadscript func is very important  func with responsability.

company assign a task to its intern of creating a loadscript function .copany trust the intern blin dly and give  whole hello function to intern to use it in  a loadscript function.so now chintu use hello function how he ant to use it.

so, intern did a mistake =callback(true,src); instead of doing callback(null,src) he did callback(true,src).
AND what happened by doing this  even after the script is loaded when hello function  is called  error was true.and due to  error true ,console.lgo became true. and sendemergencymesagetoceo() got run.The ceo was sleping ,walk up at two o'clock at night. 

so,the solution of this problem is promises.which we learn in next topic.

SECOND PROBLEM WITH CALLBACK IS PYARAMID OF DOOM ALSO KNOWN AS CALLBACK HELL
.... the more script we put on a upper code the more our code grow on the right side ,


  




*/

    