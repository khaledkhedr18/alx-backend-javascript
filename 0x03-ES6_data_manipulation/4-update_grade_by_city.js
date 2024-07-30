/**
 * create a function updateStudentGradeByCity that returns
 * an array of students for a specific city with their new grade
 * it should accept a list of students (from getListStudents), a city (String), and newGrades
 * if a student doesnt have grade in newGrades, the final grade should be N/A
 * you must use filter and map combined
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
