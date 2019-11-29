
function Hamburger(size, stuffing) { 
    try{
        if(!size || size.type != 'size') throw "Size is not correct";
                this._size = size;
               
        if(!stuffing || stuffing.type != 'stuffing') throw 'Stuffing is not correct';
                this._stuffing = [stuffing];

        this._toppings = [];
    }
    catch(e) {
        alert(e);
    }
    
} 

Hamburger.SIZE_SMALL = {
    name: 'Small',
    price: 50,
    calories: 20,
    type: 'size'
};
Hamburger.SIZE_LARGE = {
    name: 'Large',
    price: 100,
    calories: 50,
    type: 'size'
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20,
    type: 'stuffing'
};

Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5,
    type: 'stuffing'
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
    type: 'stuffing'
};
Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    calories: 5,
    type: 'topping'
};
Hamburger.TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    calories: 0,
    type: 'topping'
};


Hamburger.prototype.addTopping = function (topping) {
    try {
        if(!topping || topping.type != 'topping') throw 'Not valid Topping';
        if(this._toppings.find((item) => item.name == topping.name)) throw 'Topping already exist';
        this._toppings.push(topping);
    }
    catch(e) {
        alert(e);
    }
}

Hamburger.prototype.removeTopping = function (topping) {
    try {
        if(!topping || topping.type != 'topping') throw 'Not valid Topping';
        const itemIndex = this._toppings.findIndex((item) => item.name == topping.name);
        if(itemIndex < 0) throw 'Topping not exist';
        this._toppings.splice(itemIndex, 1);
    }
    catch(e) {
        alert(e);
    }
}


Hamburger.prototype.getToppings = function () {
    return this._toppings;
}

Hamburger.prototype.getSize = function () {
    return this._size;
}

Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    return [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item) => sum + item.price, 0);
}

Hamburger.prototype.calculateCalories = function () {
    return [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item) => sum + item.calories, 0);
}


// small hamburger with cheese
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// mayo topping
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// asking the number of calories
console.log("Calories: %f", hamburger.calculateCalories());
// asking the price
console.log("Price: %f", hamburger.calculatePrice());
// I've changed my mind, and I've decided to add more topping
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// Did hte price changed?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// How large is this hamburger
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1












// have not passed on the necessary parameters
var h2 = new Hamburger(); // => HamburgerException: no size given

// pass incorrect values, an topping instead of a size
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// add to many toppings
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 
// HamburgerException: duplicate topping 'TOPPING_MAYO'

