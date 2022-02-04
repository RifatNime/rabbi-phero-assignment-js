function seerToMon(num){
    if(num > 0){
        let mon = num / 40;
        return mon;
    }
    else{
        let command = 'please enter a positive number.';
        return command;
    }
}
let seer = 400;
let result = seerToMon(seer);
console.log(result);
