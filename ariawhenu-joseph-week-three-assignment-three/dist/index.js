import { students } from "./students.js";
import { calculateGPA, findStudent, getLetterGrade } from "./utils.js";
let nextId = 1;
/**
 * 70. Add Student
 */
export function addStudent(name) {
    const student = {
        id: nextId++,
        name,
        grades: {},
        enrolledAt: new Date()
    };
    students.push(student);
    return student;
}
/**
 * 71. Add Grade
 */
export function addGrade(studentId, subject, grade) {
    const student = findStudent(studentId);
    if (!student)
        throw new Error("Student not found");
    student.grades[subject] = grade;
    student.gpa = calculateGPA(student);
}
/**
 * 72. Get Report
 */
export function getReport(studentId) {
    const student = findStudent(studentId);
    if (!student)
        throw new Error("Student not found");
    console.log(`\n📘 Report Card: ${student.name}`);
    console.log("=".repeat(40));
    for (const [subject, grade] of Object.entries(student.grades)) {
        console.log(`${subject}: ${grade} (${getLetterGrade(grade)})`);
    }
    const gpa = calculateGPA(student);
    console.log("\nGPA:", gpa);
}
/**
 * 73. Class Ranking
 */
export function getClassRanking() {
    return [...students].sort((a, b) => (b.gpa ?? 0) - (a.gpa ?? 0));
}
/**
 * Bonus: Subject Average
 */
export function getSubjectAverage(subject) {
    let total = 0;
    let count = 0;
    for (const student of students) {
        if (student.grades[subject] !== undefined) {
            total += student.grades[subject];
            count++;
        }
    }
    return count === 0 ? 0 : Number((total / count).toFixed(2));
}
/**
 * Bonus: Class Performance Summary
 */
export function classSummary() {
    const subjects = new Set();
    students.forEach(s => {
        Object.keys(s.grades).forEach(sub => subjects.add(sub));
    });
    console.log("\n📊 Class Performance Summary");
    subjects.forEach(subject => {
        const avg = getSubjectAverage(subject);
        const status = avg >= 75 ? "Doing well ✅" : "Needs improvement ⚠️";
        console.log(`${subject}: ${avg} - ${status}`);
    });
}
const s1 = addStudent("John");
const s2 = addStudent("Mary");
addGrade(s1.id, "Math", 85);
addGrade(s1.id, "English", 78);
addGrade(s2.id, "Math", 92);
addGrade(s2.id, "English", 88);
getReport(s1.id);
getReport(s2.id);
console.log(getClassRanking());
classSummary();
