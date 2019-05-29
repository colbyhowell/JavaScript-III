/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when the "this" keyword is not bound to any particular object and is operating on the window scope, which is not recommended.
* 2. Implicit Binding is when the "this" keyword is bound to object that is using a function. The "this" is the argument passed into the function.
* 3. New Binding is when a new object is being created by a Constructor function. The "New" keyword is referring to the new object keys.
* 4. Explicit Binding is when a function is being called, but the argument is overridden by the this keyword, which is passed through the parameter.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(hello){
    console.log(this)
    return `Say ${hello}`
}

sayHello("hello")

// Principle 2

// code example for Implicit Binding

const whoMe = {
    shoesize: 16,
    bigFeet: function(name){
        console.log(`${name} has big feet with a size ${this.shoesize}`)
    }
}

whoMe.bigFeet("Colby")


// Principle 3

// code example for New Binding

function NewShoes(feet){
    this.size = feet.shoeSizeNew,
    this.width = feet.shoeWidth,
    this.type = feet.shoeType
    console.log(this)
}

const newShoe1 = new NewShoes({
    shoeSizeNew: 16,
    shoeWidth: "4E",
    shoeType: "Running"
})

console.log(newShoe1)


// Principle 4

// code example for Explicit Binding


function WhoDat(saints){
    this.person = saints,
    this.phrase = " says Who Dat say dey gonna beat dem Saints?!"
    this.speak = function(){
        console.log(this.person + this.phrase)
    }
}

const colby = new WhoDat("Colby")
const frank = new WhoDat("Frank")

colby.speak()
frank.speak()

colby.speak.call(frank)
frank.speak.call(colby)