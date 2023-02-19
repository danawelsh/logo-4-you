// constructor function to group shape, color, text
    /* function Logo(shape, color, text) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.nap = function () {
            console.log('zzzzz');
        };
    };
    */

// set variable logo to a logo object and initialize with shape, color, and text
    /*const logo = new Logo('shape', 'color', 'text');
 

// put shapes in a parent 'Shape' class
     // must provide tests for each of the classes using jest
        // ```js
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            ```



/* modeled like this:
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
  this.getLives = function () {
    return 1;
  };
}

function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log('Woof!');
};

function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
  // 'getLives()' method is overriden to provide Cat with a different functionality
  this.getLives = function () {
    return 9;
  };
}

Cat.prototype.meow = function () {
  console.log('Meow!');
};

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

console.log(dog.getLives());
console.log(cat.getLives());
*/

