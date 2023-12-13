export function sortTeachersBySubjectId(teachersArray) {
  return teachersArray.sort((teacherA, teacherB) => {
    const subjectIdA = teacherA.subjectId;
    const subjectIdB = teacherB.subjectId;

    // Порівнюємо subjectId
    if (subjectIdA < subjectIdB) {
      return -1;
    } else if (subjectIdA > subjectIdB) {
      return 1;
    } else {
      return 0;
    }
  });
}