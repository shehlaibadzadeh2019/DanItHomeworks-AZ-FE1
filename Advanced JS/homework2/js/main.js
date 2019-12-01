class Hamburger{
    constructor(size, stuffing){
        try{
            if(!size || size.type != 'size') throw "Size is not correct"
            this._size = size;
            if(!stuffing || stuffing.type != 'stuffing') throw 'Stuffing is not correct';
                
            this._stuffing = [stuffing];
        }
        catch(e){
            console.log(e);
        }
        this._toppings = [];
    }
    addTopping(topping){
        try {
            if(!topping || topping.type != 'topping') throw 'Not valid Topping';
            if(this._toppings.find((item) => item.name == topping.name)) throw 'Topping already exist';
            this._toppings.push(topping);
        }
        catch(e) {
            alert(e);
        }
    }
    removeTopping(topping){
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
    get toppings(){
        return this._toppings;
    }
    get size(){
        return this._size;
    }
    get stuffing(){
        return this._stuffing;
    }
    calculatePrice(){
        let price = [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item)=> sum + item.price, 0);
        return price;
    }
    calculateCalories(){
        let cal  = [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item)=> sum + item.calories, 0);
        return cal;
    }
}
    Hamburger.SIZE_SMALL = {
        price: 50,
        calories: 20,
        type: 'size'
    };
    Hamburger.SIZE_LARGE = {
        price: 100,
        calories: 40,
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
console.log("Is hamburger large: %s", hamburger.size === Hamburger.SIZE_LARGE); // -> false
// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.toppings.length); // 1
