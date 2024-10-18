// message="good global"
// function hello1(){
// let message="goodmorning" 
// {
//  let message="goodaternoon"
// console.log("hello1 "+message)// print- goodafternoon
// }
// let c= function hello2(){
//     console.log("I love cat"+ message)
// }
// return c
// }   
// c=hello1()
// c()


// function init(){
//     var name="mozilla"
//     function displayName(){
//         console.log(name);
//     }
//     name="sakshi"
//    return displayName
// }
// c=init()
// c()
//  since fun is  alreadyy created and after that we assign  skashi value so mozilla hi print hona chaia but esa nhi hua why??
// so, we get sakshi not mozilla ,,,,, The reason is whenever  a closure is returned , The function and the lexical environment's reference are also returned.The hard coded value is not returned reference of the variable is returned.so If I change this afterwards then what will be printed?......The actual value of the name will be printed.so If you change the name as we done in our programe then "sakshi" will be printed.


function retrunFunction() {

    function x() {
        let a = 2
        console.log(a)// 1st it print
        function y() {
            // let a = 3
            console.log(a)// 3rd (when call y )
            function z() {
                // let a= 4;
                console.log(a)
            }
            z();// 4th (when call y)
        }
        a=99;// we updated parent X variable a
        y()// 2nd this fxn run
    }
    return x;
}

let a=retrunFunction()
a()

// output:-  2, 99, 99
//explain- when we are returning x  along with x its lexical environment also getting returned. 1st a=2 get print afetr that we call y() but before callig by we updated we updated a=99... so when I call (y variable) i'll get  the (a) value=99. coz y using the value of 'a' from its parents.... so thsi is how lexical scoping work 


