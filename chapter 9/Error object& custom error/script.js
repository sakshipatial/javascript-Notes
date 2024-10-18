// try {
//     hey;
// } catch (error) {
//    console.log(error.name)
//    console.log(error.message)
//    console.log(error.stack)
// }

//how to throw a custom error
// try {
//  let age=prompt("enter you age")
//  age=Number.parseInt(age)
//  if(age>120){
//     throw new Error("this is not possible")
//  }
// } catch (error) { 
//    console.log(error);
// }

// types of error study from internet 
try {
    console.log(harry);
    throw new ReferenceError("harry is not good")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}