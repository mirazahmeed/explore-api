const user = { id: 1, name: "Khushbu", job: "Fashion Designer" };

// JavaScript Object Notation (JSON )

const jsonUser = JSON.stringify(user);

// console.log("JsonUser",jsonUser);

// Parse JSON to JavaScript Object

const parsedUser = JSON.parse(jsonUser);

// console.log("ParsedUser",parsedUser);

// Adding a new property to the user object

// console.log("USER",user);

const shop = {
    name: "My Fashion Store",
    location: "New York",
    products: [
        { id: 1, name: "Shirt", price: 20 },
        { id: 2, name: "Pants", price: 30 },
    ],
    addredd:{
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    owner: user,
};

console.log("Shop", shop);
console.log(JSON.stringify(shop));
console.log(JSON.parse(JSON.stringify(shop)));

