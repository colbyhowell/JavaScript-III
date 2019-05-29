// function hello(name) {
//   "use strict"
//   return `Hello ${this.name}`
// }

// console.log(hello("Colby"))


// const hobbit = {
//   name: "Samwise",
//   age: 32,
//   food: "taters",
//   cook: function(){
//     return `${this.name} loves to cook ${this.food}`
//   }
// }

// console.log(hobbit.cook())

// const person =  {
//   "name":"Ruby"
// }

// function introduction(html, css, js){
//   return `Hello, my name is ${person.name} and I like to program in: ${html}, ${css}, and ${js}`
// }

// const skills = ["HTML", "CSS", "JS"]

// console.log(introduction.call(person, "HTML", "CSS", "JS"))
// // so the first arugment is the call for the object it's pulling from

// console.log(introduction.apply(person,skills))
// // it can pass an array through as the items

// //                                   this
// console.log(introduction.call(person,...skills))
// // you can stop using the apply if you use the spread 


// const useLater = (introduction.bind(person,...skills))
// // you can save/bind a this item to use later

// console.log(useLater())


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/



function GameObject(attr){
  this.createdAt = attr.createdAt,
  this.name = attr.name,
  this.dimensions = attr.dimensions
}

  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game`
  }


function CharacterStats(attributes){
  GameObject.call(this, attributes),
  this.healthPoints = attributes.healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype)

CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage`
}

function Humanoid(humans){
  CharacterStats.call(this, humans),
  GameObject.call(this, humans),
  this.team = humans.team,
  this.weapons = humans.weapons,
  this.language = humans.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype)

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`
}


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!


