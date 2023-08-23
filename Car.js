const Car = function(manufacturer, price, engineType) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.getManufacturer = function() {
    return this.manufacturer;
}

Car.prototype.setManufacturer = function(newManufacturer) {
    this.manufacturer = newManufacturer;
}

Car.prototype.getPrice = function() {
    return this.price;
}

Car.prototype.setPrice = function(newPrice) {
    this.price = newPrice;
}

Car.prototype.getEngineType = function() {
    return this.engineType
}

Car.prototype.setEngineType = function(newType) {
    this.engineType = newType;
}

module.exports = Car;