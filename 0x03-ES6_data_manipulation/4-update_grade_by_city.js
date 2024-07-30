/**
 * create a function updateStudentGradeByCity that returns
 * an array of students for a specific city with their new grade
 * it should accept a list of students (from getListStudents), a city (String), and newGrades
 * if a student doesnt have grade in newGrades, the final grade should be N/A
 * you must use filter and map combined
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(
    (student) => student.location === city,
  );
  const mappedStudents = filteredStudents.map((student) => {
    for (const gradeinfo of newGrades) {
      if (student.id === gradeinfo.studentId) {
        student.grade = newGrades.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
  return mappedStudents;
}
