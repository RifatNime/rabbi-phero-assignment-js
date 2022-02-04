//electricity bill unit-taka  100-5//200-6-300-7

function electricityBill(unit){
    let bill;
    if (unit <= 100){

        bill = unit * 5
    }
    else if(unit <= 200){
        let firstBill = 100 * 5;
        let remainingBill = (unit-100)*6;
        bill = firstBill + remainingBill;

    }
    else if(unit > 200){
        
        let first100Bill = 100 * 5;
        let secondBill = 100 * 6 ;
        let remainingBill = (unit - 200) * 7;
        bill = first100Bill + secondBill + remainingBill;
    }
    return bill;

}
console.log(electricityBill(300));