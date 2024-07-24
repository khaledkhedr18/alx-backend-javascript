/**
 * Creates a student object with their first name, last name, grades, and average grade.
 * If no grades are provided, the student's last name is set to "None", grades to "None", and average grade to "None".
 *
 * @param {string} firstName - The student's first name.
 * @param {string} lastName - The student's last name.
 * @param {...number} grades - The student's grades.
 *
 * @returns {Object} - An object representing the student with the following properties:
 *  - firstName: The student's first name.
 *  - lastName: The student's last name.
 *  - grades: An array of the student's grades.
 *  - avgGrade: The average grade of the student.
 */
function createStudent(firstName, lastName, ...grades) {
    if (arguments.length > 0)
        {
            const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
            return {
                firstName: firstName,
                lastName: lastName,
                grades: grades,
                avgGrade: avgGrade };
        }
    else if (firstName != null) {
        return {
            firstName: firstName,
            lastName: "None",
            grades: "None",
            avgGrade: "None" 
        };
    }
}

const student1  = createStudent("khaled", "Khedr", 10, 12, 13, 15);
const student2  = createStudent("Ahmed");


console.log(student1);
console.log(student2);
