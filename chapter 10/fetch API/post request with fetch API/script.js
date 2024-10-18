let option={
    Mrthod:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        title:"sakshi",
        body:"bar",
        userId:"101"
})
//stringify method convert javascript object into string.
// and what jSON.parse do-convert avlid JSON string to a javascript object.
    
}

let p=fetch('https://jsonplaceholder.typicode.com/posts',option)
p.then((response)=> response.json()).then((json)=>console.log(json));