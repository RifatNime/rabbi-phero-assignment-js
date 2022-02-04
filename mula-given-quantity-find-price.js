//mula   for first 2kg = 30tk------more than 2kg -25tk--------calculate total price + handle errors
function mulaPrice(kgQuantity){
    if(typeof kgQuantity != 'number'){
        return "Please entere a valid quantity";
    }
    if(kgQuantity <= 0){
        return "Please entere a valid quantity"; 
    }
    if(kgQuantity > 10){
        return "Please entere a less than 10 quantity"; 
    }
    let price = 0;
    if(kgQuantity <= 2){//100
        price = kgQuantity * 30;//5000
    }
    else{
        price = kgQuantity * 25;
    }
 
    return price

}
console.log(mulaPrice(11));