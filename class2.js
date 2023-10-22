//write a class to calculate the uber price.
class UberPriceCalculator {
    constructor(baseFare, costPerkm, costPerMinute, pricecalc = 1.0) {
        this.baseFare = baseFare;
        this.costPerkm = costPerkm;
        this.costPerMinute = costPerMinute;
        this.pricecalc = pricecalc;
    }

    calculatePrice(distance, duration) {
        const price = this.baseFare + (distance * this.costPerkm) + (duration * this.costPerMinute);
        return price * this.pricecalc;
    }
}

const calculator = new UberPriceCalculator(3.0, 2.5, 1.25, 5.2);
const distance = 10;  // in km
const duration = 30;  // in min

const price = calculator.calculatePrice(distance, duration);
console.log(`Uber Price: Rs.${price.toFixed(2)}`);
