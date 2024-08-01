var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    var firstInitial = firstName.charAt(0).toUpperCase();
    console.log("".concat(firstInitial, ". ").concat(lastName));
}
console.log(director1);
printTeacher(teacher3);
