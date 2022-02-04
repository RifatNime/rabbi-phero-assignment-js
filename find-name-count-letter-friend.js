// write a charecter name that have 5 letter
function perfectFriend(arrayName){
    let count = 0;
    for(let i = 0; i < arrayName.length; i++){
        if(arrayName[i].length == 5){
            count = count + 1; 
            console.log(arrayName[i]);
        }
        console.log(count);
    }
     return //'Enter a string list with a 5 character string for expected output.';
}
const friendList = ['Ab-Siddik','Hafiz','Riad','Roy','Jamil'];
let output = perfectFriend(friendList);
// console.log(output);

