import { students } from "./students.js";
/**
 * Convert numeric grade to letter grade
 */
export function getLetterGrade(grade) {
    if (grade >= 90)
        return "A";
    if (grade >= 80)
        return "B";
    if (grade >= 70)
        return "C";
    if (grade >= 60)
        return "D";
    return "F";
}
/**
 * Convert grade to GPA scale (4.0)
 */
export function gradeToPoint(grade) {
    if (grade >= 90)
        return 4.0;
    if (grade >= 80)
        return 3.0;
    if (grade >= 70)
        return 2.0;
    if (grade >= 60)
        return 1.0;
    return 0.0;
}
/**
 * Calculate GPA for a student
 */
export function calculateGPA(student) {
    const grades = Object.values(student.grades);
    if (grades.length === 0)
        return 0;
    const total = grades.reduce((sum, g) => sum + gradeToPoint(g), 0);
    return Number((total / grades.length).toFixed(2));
}
/**
 * Find student by ID
 */
export function findStudent(id) {
    return students.find(s => s.id === id);
}
