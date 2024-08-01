/**
 * 1- write an interface named student that accepts: 
 * firstName: string;
 * lastName: string;
 * age: number;
 * location: string;
 * 2- create two , and create an array named studentsList containing the two students
 * 3- render a table using Vanilla JavaScript
 * 4- create table header
 * 5- append a new row to the table for each student
 * -- each row should have a first name cell and a location cell
 */


interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two students
const studentNo1: Student = {
	firstName: 'Khaled',
	lastName: 'Khedr',
	age: 22,
	location: 'Ismailia',
}

const studentNo2: Student = {
	firstName: 'Mohamed',
	lastName: 'Khedr',
	age: 21,
	location: 'Ismailia',
}

// Create an array containing the two students
const myStudentsList: Student[] = [studentNo1, studentNo2];


