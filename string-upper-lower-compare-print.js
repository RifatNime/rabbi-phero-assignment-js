function specialProblem(){
    var upper = 0;
    var lower = 0;
    for (var i = 0; i < sentance.length; i++){
        if(sentance[i] >= 'A' && sentance[i] <= 'Z'){
            upper ++;
        }
        else if(sentance[i] >= 'a' && sentance[i] <= 'z'){
            lower ++;
        }
    }
    if (upper == lower){
        return sentance;
    }
    else if (upper > lower){
        return sentance.toUpperCase();
    }
    else if (upper < lower){
        return sentance.toLowerCase();
    }
}
const sentance = "I LOVe PHERo Coding";
console.log(specialProblem());