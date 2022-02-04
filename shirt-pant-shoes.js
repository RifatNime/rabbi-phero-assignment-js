function totalSales(shirt,pant,shoes){
    const oneShirt = 100;
    const onePant = 200;
    const oneShoe = 500;
    //price total 
    const totalShirtCost = shirt * oneShirt;
    console.log('Shirt Total Money will be: ', totalShirtCost);

    const totalPantCost = pant * onePant;
    console.log('Pants Total Money will be: ', totalPantCost);

    const totalShoesCost = shoes * oneShoe;
    console.log('Shoes Total Money will be: ', totalShoesCost);

    const totalSalesMoney = totalShirtCost + totalPantCost + totalShoesCost;
    console.log('Total shopping sales money will be: ', totalSalesMoney);
    return (shirt + pant + shoes);
}
const itemBuy = totalSales (1,2,1);
console.log('Total item will buy : ', itemBuy);