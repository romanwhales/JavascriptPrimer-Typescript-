let hatPrice = 100;
console.log(`Hat Price : ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots Price: ${bootsPrice}`);
if(hatPrice === bootsPrice){
    console.log("Prices are the same");
}else{
    console.log("Prices are different");
}

let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`)

myVariable = 100;
console.log(`Type: ${typeof myVariable}`)

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`)

let hatPrice2 = 100;
let bootPrice2 = "100";

// function sumPrices(first,second,third){
//     return first + second + third;
// }
// function sumPrices(first,second,third = 0){
//     return first + second + third;
// }
function sumPrices(...numbers){
    return numbers.reduce((total,val) => {
        // return total + val;
        return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
    },0);
}

let totalPrice2 = sumPrices(hatPrice2,bootPrice2);
console.log(`Total Price2: ${totalPrice2} ${typeof totalPrice2}`);

totalPrice2 = sumPrices(100,200,300);
console.log(`Total2: ${totalPrice2} ${typeof totalPrice2}`)

totalPrice3 = sumPrices(100,200);
console.log(`Total3: ${totalPrice3} ${typeof totalPrice3}`)

totalPrice4 = sumPrices(100,200,undefined,false,"hello");
console.log(`Total4: ${totalPrice4} ${typeof totalPrice4}`)

let sumPrices2 = (...numbers) => numbers.reduce((total,val) => total + (Number.isNaN(Number(val))? 0:Number(val)))

totalPrice5 = sumPrices2(100,200,undefined,false,"hello");
console.log(`Total: ${totalPrice5} ${typeof totalPrice5}`);

let names = ["Hat","Books","Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);
let totalPrice6 = sumPrices(...prices);
console.log(`Total: ${totalPrice6} ${typeof totalPrice6}`);

console.log("Working with Arrays");
let combinedArray = [...names,...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

let hat = {
    name:"Hat",
    price:100
};

let boots = {
    name:"Boots",
    price:"100"
}

let totalPrice7 = sumPrices(hat.price,boots.price);
console.log(`Total: ${totalPrice7} ${typeof totalPrice7}`);

let gloves = {
    productName:"Gloves",
    price:"40"
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let totalPrice8 = sumPrices(hat.price,boots.price,gloves.price);
console.log(`Total: ${totalPrice8} ${typeof totalPrice8}`);

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

let otherHat = {...hat};
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = {...hat,discounted:true};
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = {
    ...hat,
    price:10
}

console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let {price, ...someProperties} = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

/**
 * Defining Getters and Setters
 */

let hat2 = {
    name:"Hat2",
    _price:100,
    priceIncTax: 100 * 1.2,

    set price(newPrice){
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price(){
        return this._price;
    },
    // writeDetails:function(){
    //     console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    // }
    // writeDetails(){
    //     console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    // }
    writeDetails:()=>{
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }

}

let boots2 = {
    name:"Boots2",
    price:"100",
    get priceIncTax(){
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat2: ${hat2.price}, ${hat2.priceIncTax}`);
hat2.price = 120;
console.log(`Hat2: ${hat2.price}, ${hat2.priceIncTax}`);

console.log(`Boots2: ${boots2.price}, ${boots2.priceIncTax}`);
boots2.price = "120";
console.log(`Boots2: ${boots2.price}, ${boots2.priceIncTax}`);

hat2.writeDetails();
hat2.price = 120;
hat2.writeDetails();

function writeMessage(message){
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";
writeMessage("It's sunny today");

console.log("This in Arrow Function");

let myObject = {
    greeting:"Hi there",
    getWriter(){
        return (message) => console.log(`${this.greeting}, ${message}`)
    }
}

let writer = myObject.getWriter();
writer("It is raining outside");
let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");
console.log("Chapter 4 Part 2");
let hat3 = {
    name:"Hat",
    price:100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat: ${hat3.price}, ${hat3.getPriceIncTax()}`)
console.log(`toString: ${hat3.toString()}`);

let boots3 = {
    name:"Boots",
    price:100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
}

let hat3Prototype = Object.getPrototypeOf(hat3);
console.log(`Hat Prototype: ${hat3Prototype}`);

let boots3Prototype = Object.getPrototypeOf(boots3);
console.log(`Boots3 Prototype: ${boots3Prototype}`)
console.log(`Common Prototype: ${hat3Prototype === boots3Prototype}`);

hat3Prototype.toString = function(){
    return `toString: Name: ${this.name}, Price: ${this.price}`
}
console.log(hat3.toString());
console.log(boots3.toString());

let ProductProto = {
    toString:function(){
        return `toString(): Name: ${this.name}, Price: ${this.price}`;
    }
}

Object.setPrototypeOf(hat3,ProductProto);
Object.setPrototypeOf(boots3,ProductProto);
console.log(hat3.toString());
console.log(boots3.toString());

console.log("Using Constructor Function");
let Product = function(name,price){
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function(){
    return `toString: Name: ${this.name}, Price: ${this.price} `
}

let hat4 = new Product("Hat4",100);
let boots4 = new Product("Boots4",100);

console.log(hat4.toString());
console.log(boots4.toString());

console.log("Chaining Constructor Functions");
let TaxedProduct = function(name,price,taxRate){
    Product.call(this,name,price);
    this.taxRate = taxRate;
}
Object.setPrototypeOf(TaxedProduct.prototype,Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function(){
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function(){
    return `${this.toString()}, Tax:${this.getPriceIncTax()}`
}







