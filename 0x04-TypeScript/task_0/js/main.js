"use strict";
/**
 * Write an interface named Studentthat accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Nairobi',
};
var student2 = {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'Cairo',
};
var studentsList = [student1, student2];
/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 *
 * - Each row should contain the first name of the student and the location
 */
var renderTable = function (studentsList) {
    // create table tag
    var table = document.createElement('table');
    var headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        table.insertAdjacentElement('beforeend', studentRow);
    }
    document.body.insertAdjacentElement('beforeend', table);
};
exports.renderTable = renderTable;
(0, exports.renderTable)(studentsList);
