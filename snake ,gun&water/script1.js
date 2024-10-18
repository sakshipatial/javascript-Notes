var score=0;
for(let i=0;i<=9;i++){
   
    let char="gws"
    let randomchar=char[Math.floor(Math.random()*char.length)];
    const prompt=require("prompt-sync")({sigint:true});
    let userchar=prompt("enter one character b/w s,g,w=");
    switch(userchar){
        case 'g':
            if (randomchar=='g'){
                console.log("tie!no score")
                console.log(`computer enter=${randomchar}`);
            }
            else if(randomchar=='w'){
                score= score+0
                console.log(`score=${score}`)
                console.log(`computer enter=${randomchar}`)
            }
            else if(randomchar=='s'){
                score=score+1;
                console.log(`score=${score}`);
                console.log(`computer enter=${randomchar}`);
            }
            break;
        case 'w':
            if (randomchar=='g'){
                score=score+1;
                console.log(`score=${score}`)
                console.log(`computer enter=${randomchar}`);
            }
            else if(randomchar=='w'){
                console.log("tie!no score")
                console.log(`computer enter=${randomchar}`);
            }
            else if(randomchar=='s'){
                score=score+0;
                console.log(`score=${score}`)
                console.log(`computer enter=${randomchar}`);
       }   
            break;
        case 's':
            if (randomchar=='g'){
                score=score+0;
                console.log(`score=${score}`)
                console.log(`computer enter=${randomchar}`);
            }
            else if(randomchar=='w'){
                score=score+1;
                console.log(`score=${score}`)
                console.log(`computer enter=${randomchar}`);
            }
            else if(randomchar=='s'){
                console.log("tie!no score")
                console.log(`computer enter=${randomchar}`);
            }  
           break; 
    }
   
}
console.log(score);