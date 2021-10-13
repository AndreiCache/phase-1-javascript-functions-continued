function saturdayFun (skate = 'roller-skate'){
    return `This Saturday, I want to ${skate}!`
}


function mondayWork (jog = 'go to the office', home = 'work from home'){
    if (mondayWork === ''){
        return `This Monday, I will ${home}.`
    }else {
        return `This Monday, I will ${jog}.`
    }

}

// function wrapAdjective ( worker = 'a hard worker', msg = 'You are'){
//     return function (programmer = 'a dedicated programmer'){
//         return `${worker}` `${programmer}`
//     }
// }
//    wrapAdjective( ` ${msg} ${worker} !` ) 



// function wrapAdjective (){
//     const worker = 'a hard worker.';
//     return function() {
//         const programmer = 'a dedicated programmer.';
//         return function(){
//             console.log(`${worker}`)
//         }
//     }
// }
// wrapAdjective (`You are ${worker}!`) 


// function wrapAdjective(a = '*'){
//     return function newWrap(b = 'special'){
//         return `You are ${a}${b}${a}!`
//     }
        
// }

function wrapAdjective(a = "*") {      
      return function newWrap(b = "special") {            
          return `You are ${a}${b}${a}!`       
         }   
}
// function wrapAdjective (a = "*"){
//     return function jack ()
// }

