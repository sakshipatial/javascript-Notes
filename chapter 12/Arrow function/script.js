
x=(name,name1)=>{
    console.log("My name is "+ name+ name1)}
const obj={
    name:"sakshi",
    class:"11th",
    rollno:"987",
    grade:"A+",
   show: function(){
    console.log(this)// her "this keyword" refer object
    that= this;// save "this" object in "that variable" so we can use this variable in child function
    setTimeout(function() {
        console.log(this)// here function inside a function "this keywordr" refer to window object.
        console.log(`name of candidate is ${that.name} rol no is ${that.rollno}`)
    }, 4000);
      
   }
}
obj.show()

// explain=> when you create a new function inside  a function using normal JS function syntax in a object . Then what will "this" refer to for this function. so 'This' in that function will be  a global object.
// and if you use (this keyword ) inside an event .So, "this" inside an event  will refer to the element which recieved that event.