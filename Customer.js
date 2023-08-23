const Car = require("./Car");

const Customer = function(name,wallet) {
    this.name = name;
    this.wallet = wallet;
    this.call = null;
}

