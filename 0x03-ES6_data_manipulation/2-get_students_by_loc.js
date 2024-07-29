/**
 * create a function getStudentsByLocation that returns an array of objects
 * who are located in a specific city
 * it should accept a list of students from getStudentsList and a city name as parameters
 * you must use the filter function on the array
 */

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
