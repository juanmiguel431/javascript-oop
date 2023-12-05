
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

