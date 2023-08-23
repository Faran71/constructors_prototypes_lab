const Car = require("./Car");
const Customer = require("./Customer");
const Dealership = require("./Dealership");

const Car1 = new Car("Mitsubishi",4000,"Petrol");
const Car2 = new Car("Ferrari",10000,"Diesel");
const Dealer = new Dealership("Cars for sale",4,[Car1,Car2]);
const steve = new Customer("Steve",5000);

describe('Dealership', () => {

    test('can add car to stock and only adds upto maximum capacity', () => {
        const Car3 = new Car("Toyota",6000,"Diesel");
        const Car4 = new Car("Toyota",4000,"Petrol");
        const Car5 = new Car("Toyota",8000,"Petrol");
        Dealer.addCarToStock(Car3)
        Dealer.addCarToStock(Car4)
        Dealer.addCarToStock(Car5)
        // there is a maximum capacity of 4
        expect(Dealer.countCarsInStock()).toBe(4)
    })

    test('can get manufacturers', () => {
        expect(Dealer.getManufacturers()).toStrictEqual(["Mitsubishi","Ferrari","Toyota","Toyota"]);
    })

    test('find number of cars from manufacturer', () => {
        expect(Dealer.findCarFrom("Mitsubishi","Manufacturer").length).toBe(1);
    })
    
    test('find number of cars from maximum price', () => {
        expect(Dealer.findCarFrom(9000,"Price").length).toBe(3);
    })
    
    test('find number of cars from Fuel Type', () => {
        expect(Dealer.findCarFrom("Petrol","Engine Type").length).toBe(2);
    })

    test('find total value', () => {
        expect(Dealer.totalValue()).toBe(24000);
    })

    test('customer can buy a car', () => {
        Dealer.sellCar(steve,Car1);
        expect(steve.getWallet()).toBe(1000);
    })
    
    test('customer cannot afford a car', () => {
        Dealer.sellCar(steve,Car2);
        // From the previous test, the wallet will be 1000 so can't afford this car, wallet doesnt change.
        expect(steve.getWallet()).toBe(1000);
    })
})