const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
    cats: new Queue(),
    dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
    getNextCat() {
        return pets.cats.show();
    },
    getNextDog() {
      return pets.dogs.show();
  },

    dequeue(type) {
      pets[type].dequeue();
      return;
    }
};
