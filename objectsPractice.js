const gus = {
    name: "Gus",
    species: "dog",
    nicknames: ["Gus", "Big Dog", "Dire Wolf"],
    age: 6,
    bark: (subject) => {
        console.log(`Gus barks "WOOF!" at ${subject}`)
    },
    whine: (person) => {
        console.log(`Gus whines at ${person}`)
    },
    pant: (something) => {
        console.log(`Gus pants after ${something}`)
    },
    favoriteToys: [],
    play: function (toy, toyProperty) {
        if (toyProperty === "chewy") {
            this.favoriteToys.push(toy) 
        }
    }
}

// const toys = {
//     bone: {
//         fun: true
//     },
//     pullToy: {
//         fun: false
//     }
// }

gus.bark("the mailman")
gus.whine("mom")
gus.pant("a long walk")
gus.play("bone", "chewy")
gus.play("butt)

console.log(gus)



// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.


const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
    },
    orders: []
}

const chickenComboMeal = {

}

// Place an order
restaurant.placeOrder()

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()