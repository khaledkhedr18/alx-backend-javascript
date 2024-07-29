/**
 * create a function getStudentIdsSum that returns the sume of the student ids
 * it should accept a list of students from getListOfStudents as a parameter
 * you must use the duce function on the array
 */

export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
