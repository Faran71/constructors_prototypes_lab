const Car = require("./Car");
const Customer = require("./Customer");


const Dealership = function(name, maxNumberOfCars, stock) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars
    this.stock = stock;
}

Object.setPrototypeOf(Dealership.prototype, [Car.prototype,Customer.prototype])
// Object.setPrototypeOf(Dealership.prototype, Customer.prototype)

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

 Dealership.prototype.findCarFrom = function(name , property) {
    stockCars = [];
    this.stock.forEach(car => {
        if(property === "Manufacturer"){
            if (car.getManufacturer() === name) {
                stockCars.push(car);
            }
        } else if(property === "Price"){
            if(car.getPrice() <= name){
                stockCars.push(car);
            }
        } else if(property === "Engine Type"){
            if(car.getEngineType() === name){
                stockCars.push(car);
            }
        }
        
    })
    return stockCars;
 }

//  Dealership.prototype.findCarFromManufacturer = function(manufacturerName) {
//     stockCars = [];
//     this.stock.forEach(car => {
//         if (car.getManufacturer() === manufacturerName) {
//             stockCars.push(car);
//         }
//     })
//     return stockCars;
//  }

 Dealership.prototype.totalValue = function() {
    total = 0;
    this.stock.forEach(car => {
        total += car.getPrice();
    });
    return total;
 }

 Dealership.prototype.sellCar = function(customer, carToBuy) {
    customer.buyCar(carToBuy);
    if (customer.getCar() !== null) {
        this.stock.splice(this.stock.indexOf(carToBuy),1);
    }
 }


module.exports = Dealership;