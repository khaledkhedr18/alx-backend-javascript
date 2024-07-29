/**
 * create a function getListStudentIds that returns an array of ids from a list of object
 * this function is taking one argument which is an array of objects
 * the array is the same format as getListStudents from the previous task\
 * if the argument is not an array the function is returning an empty array
 * must use map function on the array
 */

export default function getListStudentIds(listStudents) {
  if (listStudents instanceof Array === true) {
    return listStudents.map((student) => student.id);
  }
  return [];
}
