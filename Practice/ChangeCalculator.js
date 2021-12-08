class cash{
    constructor(value){
        this._value = value;
    }
    get value(){
        return this._value ;
    }
}
class coins{
    constructor(value){
        this._value = value
    }
    get value(){
        return this._value
    }
}
function changeCal(priceOfProduct, cashOfCustomer) {
    const bank500 = new cash(500);
    const bank100 = new cash(100);
    const bank50 = new cash(50);
    const bank20 = new cash(20);
    const coins10 = new coins(10);
    const coins5 = new coins(5);
    const coins2 = new coins(2);
    const coins1 = new coins(1);
    let arraysCash = [bank500, bank100, bank50, bank20];
    let cashCount = [0, 0, 0, 0];
    let arraysCoins = [coins10, coins5, coins2, coins1]
    let coinsCount = [0, 0, 0, 0];
    let cal = cashOfCustomer - priceOfProduct;
    let change = cal;
    let text = [];
    if (cal < 0) {
        return `\nCumtomerPaid: ${cashOfCustomer} \nPrice: ${priceOfProduct} \nYour money is not enough!!!`
    }else{
        for (let index = 0; index < arraysCash.length; index++) {
            cashCount[index] = Math.floor(cal / arraysCash[index].value);
            cal -= (cashCount[index] * arraysCash[index].value); 
            text.push(`\n Cash ${arraysCash[index].value} : ${cashCount[index]} Cash` );
        }
        for (let index = 0; index < arraysCoins.length; index++) {
            coinsCount[index] = Math.floor(cal / arraysCoins[index].value);
            cal -= (coinsCount[index] * arraysCoins[index].value);
            text.push(`\n Coins ${arraysCoins[index].value} : ${coinsCount[index]} Coins`);
        }
    };

    return `\nCumtomerPaid: ${cashOfCustomer} \nPrice: ${priceOfProduct} \nChange : ${change} \nChangeCount ${text}`;
};
console.log(changeCal(1000, 2000));
console.log(changeCal(2000, 1000));
console.log(changeCal(15212, 20000));


