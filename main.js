/*

const fruit = {
    name: "banana",
    color: ["green","yellow", "brown"],
    sugar: 14,
    inSeason: false,
    type: {
        name: "plantain",
        origin: "Southeast Asia",
    },
    
}

console.table(fruit);
console.log(fruit.color[0]);
console.log(fruit.color[2]);

// Shoe

// set the object's properties

const shoeObj = {
    brand: "converse", 
    laces: 2,
    velcro: false,
    color: "green",
    type: "men",
    activityType: "casual"
};


console.log(shoeObj.brand);
console.log(shoeObj ["brand"]);
console.table(shoeObj);


for (const brand in shoeObj) {
    console.log(shoeObj["brand"])
}

console.table(Object.keys(shoeObj));
console.table(Object.values(shoeObj));
*/
//
// start of label for customer

// Object Declaration

const customer = {
    // create key:value pairs for the following properties
    firstName: "jake",
    lastName: "smith",
    email : "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};


console.log(customer);
console.table(customer);


// Update Key:Values
// update the mistakes created on the first pass of the fill-out survey.
// modify the following using bracket[] notation: email, phone, zipCode, favoriteFlavors to ["coffee", "strawberry", "matcha"]


customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"]= ["coffee", "strawberry", "matcha"];

console.table(customer);
console.log(customer["favoriteFlavors"]);
console.log(customer);


// Delete Key:Values


delete customer["zipCode"];
delete customer["favoriteStore"]


console.log(customer);

// Add Key:Values

customer.toppings = ["chocolate sprinklers", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(customer);


// Final Print

console.log(Object.keys (customer));
console.table(Object.keys(customer));

// 







