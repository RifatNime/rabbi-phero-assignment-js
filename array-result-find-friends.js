// function checkGPA(markes){
//     for(let i = 0; i < markes.length; i++){
//         let element = markes[i];
//         if(element >= 80){
            
//             console.log(element, "Have got A+");
           
//             // return true;
//         }    
//     }
//     return false;
// }
// console.log(checkGPA([78, 82, 69,89]));
function checkGPA(markes){
    for(let i = 0; i < markes.length; i++){
        let element = markes[i];
        if(element >= 80){
            
            console.log(element, "Have got A+");
           
            // return true;
        }

        
    }

    return false;
}
console.log(checkGPA([78, 82, 69,89]));