const Car = require("./Car");


const Dealership = function(name, maxNumberOfCars, stock) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars
    this.stock = stock;
}

Object.setPrototypeOf(Dealership.prototype, Car.prototype)

Dealership.prototype.countCarsInStock = function() {
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(newCar) {
    if(this.countCarsInStock() < this.maxNumberOfCars) {
        this.stock.push(newCar);
    }
}

Dealership.prototype.getManufacturers = function() {
    stockManufacturers = [];
    this.stock.forEach(car => {
        stockManufacturers.push(car.getManufacturer())
    })
    return stockManufacturers;
}

 Dealership.prototype.findCarFromManufacturer = function(manufacturerName) {
    stockCars = [];
    this.stock.forEach(car => {
        if (car.getManufacturer() === manufacturerName) {
            stockCars.push(car);
        }
    })
    return stockCars;
 }

 Dealership.prototype.totalValue = function() {
    total = 0;
    this.stock.forEach(car => {
        total += car.getPrice();
    });
    return total;
 }

 module.exports = Dealership;