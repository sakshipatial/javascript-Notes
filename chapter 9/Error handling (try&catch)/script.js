setTimeout(() => {
    console.log("hyy Iam a hacker")
}, 1000)

// try {
//     setTimeout(()=>{
//     console. log(rahul)})
// } catch (error) {
//     // console.log(error)
//     console.log("hyy iam error")
// }  NOT WORK IN SCHEDULED LINE OF CODE

try {
     console.log(rahul)
} catch (error) {
    // console.log(error)
    console.log("hyy iam error")
}// ONLY WORK IN SYNCHRONOUS LINE OF CODE.

setTimeout(() => {
    console.log("fetching usename and password.....please wait....")
    // console.log(rahul);
    // if you write this code of line inside the settime out ofcourse it shows error but next code will line execute
}, 2000)
setTimeout(() => {
    console.log("Hacking ankita's facebook ID.....please wait....")
}, 3000)
setTimeout(() => {
    console.log("user name and password of rahul fetched...please wait.....")
}, 4000)

