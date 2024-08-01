const person = {
  firstName: 'Nick',
  lastName: 'Anderson',
  age: 35,
  sex: 'M',
};

function joinFirstLastName1(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return firstName + '-' + lastName;
}

const joinFirstLastName2 = ({ firstName, lastName }) =>
  firstName + '-' + lastName;

console.log(joinFirstLastName1(person));
console.log(joinFirstLastName2(person));
