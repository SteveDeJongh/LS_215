// Lesson 1 - Practice Problem: Class Records Summary

// PEDAC

// Input: object of student objects
// Output: object of student grades array and exams object

// calculate a students grade average, and grade letter
// Calculate for each exam: aberage, min, max;

// Algorithm:

// collect data:


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams)
  return {
    studentGrades: studentGrades(scoreData),
    exams: examScores(examData),
  }
}

function studentGrades(scores) {
  return scores.map(student => {
    let score = getAverage(student);
    let grade = getGrade(score);
    return `${score} (${grade})`;
  });
}

function getAverage(scores) {
  let exams = (scores.exams.reduce((sum, curr) => sum + curr) / 4) * .65;
  let exercises = scores.exercises.reduce((sum, curr) => sum + curr) * .35;
  return Math.round(exams + exercises);
}

function getGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function examScores(scores) {
  let examSummaries = summarizeExams(scores);
  return examSummaries.map(examData => {
    return {
      average: examAverage(examData),
      min: Math.min(...examData),
      maximum: Math.max(...examData),
    }
  });
}

function examAverage(examData) {
  return examData.reduce((sum, curr) => sum += curr) / examData.length;
}

function summarizeExams(scores) {
  let firstScore = scores[0];
  let remainingScores = scores.splice(1);

  return firstScore.map((score, index) => {
    let res = [score];

    remainingScores.forEach((score) => {
      res.push(score[index]);
    });
    
    return res;
  });
}

generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }