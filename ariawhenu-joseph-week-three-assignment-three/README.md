# Grade Tracking CLI (TypeScript)

Simple CLI system for managing students, grades, GPA, ranking, and subject analytics.

---

## Features
- Add students
- Add grades per subject
- Auto GPA calculation
- Student report card
- Class ranking
- Subject average + performance summary

---

## Project Structure
src/
- index.ts
- students.ts
- utils.ts

dist/ (generated)

---

## Setup
npm install
npm install -g typescript
or
pnpm install
pnpm install -g typescript

---

## Build
npx tsc
or 
pnpm tsc

---

## Run
node dist/index.js

---

## Core Functions

addStudent(name)
addGrade(studentId, subject, grade)
getReport(studentId)
getClassRanking()

---

## Bonus
getSubjectAverage(subject)
classSummary()

---

## GPA Scale
90-100: 4.0
80-89: 3.0
70-79: 2.0
60-69: 1.0
<60: 0.0

---

## Author
Ariawhenu Joseph
