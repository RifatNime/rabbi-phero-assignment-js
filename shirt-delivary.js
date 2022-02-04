function deliveryCost(shirtNum){
    const first100Shirt = 100;
    const second100Shirt = 80;
    const third100Shirt = 50;
    if( shirtNum <= 100){
        const count = shirtNum * first100Shirt;
        return count;
    }
    else if(shirtNum <= 200){
        const first100DistanceCost = 100 * first100Shirt;
        const restDistance = shirtNum - 100;
        const second100DistanceCost = restDistance * second100Shirt;
        const totalDistancesCost = first100DistanceCost + second100DistanceCost;
        return totalDistancesCost;
    }
    else{
        const first100DistanceCost = 100 * first100Shirt;
        const second100DistanceCost = 100 * second100Shirt;
        const restDistance = shirtNum - 200;
        const third100DistanceCost = third100Shirt * restDistance;
        const totalDistancesCost = first100DistanceCost + second100DistanceCost + third100DistanceCost;
        return totalDistancesCost;

    }
}
const tShit = 210;
console.log( tShit,'tShirt delivery cost will be')
const output = deliveryCost(tShit);
console.log(output,"taka");