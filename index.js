
// Factory function
function createUser(givenName, surname) {
  return {
    firstName: givenName,
    lastName: surname,
    fullName: function () {
      return `${givenName} ${surname}`;
    }
  };
}

// Constructor function
function User(givenName, surname) {
  this.firstName = givenName;
  this.lastName = surname;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const user1 = createUser('Juan Miguel', 'Paulino Carpio');
console.log(user1.firstName);
console.log(user1.fullName());

const user2 = new User('Jayleen', 'Ortega');
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.fullName());


function Circle(radius) {
  this.radius = radius;

  this.draw =  () => {
    this.radius = 25;
  }

  let defaultLocation = { x: 0, y: 0 };

  Object.defineProperty(this, 'defaultLocation',{
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('default location is not valid.');
      }
      defaultLocation = value;
    }
  })
}

class Circle2 {
  radius;
  get defaultLocation() {
    return this.radius;
  }
}

const circle1 = new Circle(25);
console.log('defaultLocation', circle1.defaultLocation);
circle1.defaultLocation = 25;
console.log(circle1);
