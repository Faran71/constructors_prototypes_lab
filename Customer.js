const Car = require("./Car");

const Customer = function(name,wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Object.setPrototypeOf(Customer.prototype, Car.prototype)

Customer.prototype.buyCar = function(newCar) {
    if ((this.wallet - newCar.getPrice()) >= 0){
        this.wallet = this.wallet - newCar.getPrice();
        this.car = newCar;
    } 
}

Customer.prototype.getCar = function() {
    return this.car;
}

Customer.prototype.getWallet = function() {
    return this.wallet;
}

module.exports = Customer;
