
// scene 1 
var hamlets = [
    "Laurence Olivier, 1948",
    "Grigori Kozintsev, 1964",
    "Tony Richardson, 1969",
    "Franco Zeffirelli, 1990",
    "Kenneth Branagh, 1996",
    "Michael Almereyda, 2000"
  ];


  hamlets.forEach(actor=>{

    actor = actor.split(',')
    console.log('scene 1');

      console.log(`O! the venerable ${actor[0]} starred as Hamlet in${actor[1]}`);
      
  })

  //scene 2 
  var hamlets = [
    "Laurence Olivier, 1948",
    "Grigori Kozintsev, 1964",
    "Michael Almereyda, 2000"
  ]
var ans = hamlets.map(actor=>{
    actor = actor.split(',')
    let num = parseInt(actor[1])
    return actor = [actor[0],num]

})
console.log('scene 2');

console.log(ans);


// scene 3 
var ans = hamlets.map(actor=>{
    actor = actor.split(',')
    let num = parseInt(actor[1])
    return actor ={name: actor[0],
        year: num}

})
console.log('scene 3');

console.log(ans);


// scene 4 
var swingin_hamlets = []
hamlets.forEach(actor=>{
  
    actor = actor.split(',')
    let num = parseInt(actor[1])

    if(num >= 1960 && num < 1970){
        swingin_hamlets.push({name: actor[0], year: num})
        // console.log('sup');
        
    }
    // return actor ={name: actor[0],
    //     year: num}

})
console.log('scene 4');

console.log(swingin_hamlets);


//scene 5
var future_hamlets = []
hamlets.forEach(actor=>{
  
    actor = actor.split(',')
    let num = parseInt(actor[1])

    if(num >= 2000 ){
        future_hamlets.push({name: actor[0], year: num})
        // console.log('sup');
        
    }
    // return actor ={name: actor[0],
    //     year: num}

})
console.log('scene 5');

console.log(future_hamlets);
