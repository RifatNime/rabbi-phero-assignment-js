// Problem 1 : anaToVori

function anaToVori(valueAna){
    if(valueAna > 0){
        let vori = valueAna / 16;
        return vori;
    }
    //Error fixing message
    else{
        let command = 'Please enter a positive number.';
        return command;
    }
}
let ana = 32;
let result = anaToVori(ana);
console.log(result);

// Problem 2 : pandaCost  

function pandaCost(singra,samucha,gilapi){

    if(singra >= 0 && samucha >= 0 && gilapi >= 0){
    const oneSingra = 7;
    const oneSamucha = 10;
    const oneGilapi = 15;
    const totalSingraCost = singra * oneSingra;
    const totalSamuchaCost = samucha * oneSamucha;
    const totalGilapiCost = gilapi * oneGilapi;
    const totalSalesMoney = totalSingraCost + totalSamuchaCost + totalGilapiCost;
    return totalSalesMoney;
    }
    //Error fixing message
    else{
        return 'Enter 3 positive number.';
    }
}
const foodBuy = pandaCost ( 1, 1, 1);
console.log(foodBuy);

// Problem 3 : picnicBudget

function picnicBudget(people){
    let cost;
    if (people <= 0){
        //Error fixing message
        return 'Please enter, How many people wants to attend.';
    }
    else if (people <= 100){

        cost = people * 5000;
    }
    else if(people <= 200){
        let first100Cost = 100 * 5000;
        let remainingCost = (people - 100) * 4000;
        cost = first100Cost + remainingCost;
    }
    else if(people > 200){
        
        let first100cost = 100 * 5000;
        let second100Cost = 100 * 4000;
        let remainingCost = (people - 200) * 3000;
        cost = first100cost + second100Cost + remainingCost;
    }
    return cost;

}
let paidPeople = picnicBudget(100);
console.log(paidPeople);

// Problem 4 :  oddFriend 

function oddFriend(arrayName){

    for(let i = 0; i < arrayName.length; i++){

        if(arrayName[i].length % 2 == 1){
            return arrayName[i];
        }
    }
    //Error fixing message
    return 'Enter a string list with an odd character string for expected output.'
}
const friendList = ['Rana','Siddik','Hafiz','Riad','Rahman','Samsur'];
let firstOdd = oddFriend(friendList);
console.log(firstOdd);