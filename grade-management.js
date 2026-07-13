/* ============================================================
   MINI-PROJECT: STUDENT GRADE TRACKER
   ============================================================ */

const gradeTracker = {
  students: [], // will hold objects like { name: "Alice", grades: { math: 95, ... } }

  // ------------------------------------------------------------
  // Add a new student to the tracker
  // ------------------------------------------------------------
  addStudent(name, grades) {
    // We store each student as an object with a "name" and a
    // "grades" object, then push it into the students array.
    this.students.push({ name, grades });
    // Note: { name, grades } is "shorthand property syntax" —
    // it's the same as writing { name: name, grades: grades }
  },

  // ------------------------------------------------------------
  // Find a single student by name
  // ------------------------------------------------------------
  getStudent(name) {
    // .find() loops through the array and returns the FIRST
    // element where the condition inside is true — or
    // "undefined" if nothing matches.
    const student = this.students.find((s) => s.name === name);

    // The requirement says return null (not undefined) if not found,
    // so we convert "not found" into null explicitly:
    return student || null;
  },

  // ------------------------------------------------------------
  // Calculate one student's average across all their subjects
  // ------------------------------------------------------------
  getStudentAverage(name) {
    const student = this.getStudent(name); // reuse the method above
    if (!student) return null; // student doesn't exist — nothing to average

    // Object.values() pulls out just the numbers from the grades
    // object, ignoring the subject names.
    // e.g. { math: 95, english: 88 } -> [95, 88]
    const scores = Object.values(student.grades);

    // .reduce() walks through the array and "reduces" it down to
    // a single value. Here, "sum" starts at 0, and each score
    // gets added to it as we go.
    const total = scores.reduce((sum, score) => sum + score, 0);

    const average = total / scores.length;

    // Round to 2 decimal places without turning it into a string:
    // multiply by 100, round to nearest whole number, divide back by 100
    return Math.round(average * 100) / 100;
  },

  // ------------------------------------------------------------
  // Calculate the class-wide average for ONE subject
  // ------------------------------------------------------------
  getSubjectAverage(subject) {
    // .filter() keeps only students who actually have a grade
    // for this subject (in case some students don't take it)
    const studentsWithSubject = this.students.filter(
      (s) => s.grades[subject] !== undefined
    );

    if (studentsWithSubject.length === 0) return null; // nobody has this subject

    const total = studentsWithSubject.reduce(
      (sum, s) => sum + s.grades[subject],
      0
    );

    const average = total / studentsWithSubject.length;
    return Math.round(average * 100) / 100;
  },

  // ------------------------------------------------------------
  // Find the student with the highest overall average
  // ------------------------------------------------------------
  getTopStudent() {
    if (this.students.length === 0) return null;

    // .reduce() again — but this time we're not summing numbers,
    // we're comparing students against each other and keeping
    // whichever one is "best so far" as we move through the array.
    return this.students.reduce((topSoFar, currentStudent) => {
      const topAvg = this.getStudentAverage(topSoFar.name);
      const currentAvg = this.getStudentAverage(currentStudent.name);
      return currentAvg > topAvg ? currentStudent : topSoFar;
    });
    // Note: this.students.reduce(...) with no starting value uses
    // the FIRST element as the initial "topSoFar" automatically.
  },

  // ------------------------------------------------------------
  // Find all students whose average is below 70
  // ------------------------------------------------------------
  getStrugglingStudents() {
    // .filter() returns a NEW array containing only the students
    // that pass the test inside the arrow function.
    return this.students.filter(
      (s) => this.getStudentAverage(s.name) < 70
    );
  },

  // ------------------------------------------------------------
  // Convert a numeric score into a letter grade
  // ------------------------------------------------------------
  getLetterGrade(score) {
    // Order matters here: we check from HIGHEST to LOWEST.
    // If we checked "score >= 60" first, everything above 60
    // would incorrectly get marked as a D.
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },

  // ------------------------------------------------------------
  // Build a nicely formatted report card string for one student
  // ------------------------------------------------------------
  generateReportCard(name) {
    const student = this.getStudent(name);
    if (!student) return `No student found with name "${name}".`;

    const average = this.getStudentAverage(name);
    const letter = this.getLetterGrade(average);

    // Object.entries() gives us BOTH the subject name and the
    // score together, as [subject, score] pairs, so we can loop
    // through them and format each line.
    const subjectLines = Object.entries(student.grades)
      .map(([subject, score]) => {
        // Capitalize the first letter of the subject for nicer output
        const subjectName = subject[0].toUpperCase() + subject.slice(1);
        return `  ${subjectName}: ${score} (${this.getLetterGrade(score)})`;
      })
      .join("\n"); // stitch all the lines together with line breaks

    return (
      `Report Card for ${student.name}\n` +
      `${subjectLines}\n` +
      `Average: ${average} (${letter})`
    );
  },
};

/* ============================================================
   TESTING THE IMPLEMENTATION
   ============================================================ */

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // { name: "Alice", grades: {...} }
console.log(gradeTracker.getStrugglingStudents());         // [ { name: "Charlie", grades: {...} } ]
console.log(gradeTracker.generateReportCard("Alice"));