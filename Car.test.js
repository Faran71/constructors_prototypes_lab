const Car = require("./Car");
const newCar = new Car("Mitsubishi",3000,"Petrol")
  
describe('Car', () => { 
    
    test('can get manufacturer', () => {
        expect(newCar.getManufacturer()).toBe("Mitsubishi");
    });

    test('can set manufacturer', () => {
        newCar.setManufacturer("Toyota")
        expect(newCar.getManufacturer()).toBe("Toyota");
    });

    test('can get price', () => {
        expect(newCar.getPrice()).toBe(3000);
    });

    test('can set price', () => {
        newCar.setPrice(50000)
        expect(newCar.getPrice()).toBe(50000);
    });

    test('can get engine type', () => {
        expect(newCar.getEngineType()).toBe("Petrol");
    });

    test('can set engine type', () => {
        newCar.setEngineType("Diesel")
        expect(newCar.getEngineType()).toBe("Diesel");
    });
  
  });