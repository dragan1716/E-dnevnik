import classes from "./SubjectCard.module.css";

const SubjectCard = ({ subject }) => {
  const averageGradeNumber = (grades) => {
    const empty = "/";
    if (grades.length === 0) {
      return empty.toString();
    } else {
      const total = grades.reduce((a, b) => a + parseInt(b.value), 0);
      const average = total / grades.length;
      return average.toFixed(2);
    }
  };

  const firstSemesterGrades = subject.semesters
    .find((semester) => semester.semesterType === "winter")
    .grades.filter((grade) => grade.type !== "activity");

  const secondSemesterGrades = subject.semesters
    .find((semester) => semester.semesterType === "summer")
    .grades.filter((grade) => grade.type !== "activity");

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.items} key={subject._id}>
          <div className={classes["subject-name"]}>{subject.subjectName}</div>
          <div className={classes["items-content"]}>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-items-wrap"]}>
                <div className={classes["part"]}>I</div>
                <div className={classes["part-items"]}>
                  {firstSemesterGrades.map((grade, index) => (
                    <div key={index} className={classes["part-item"]}>
                      {grade.value}
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes["subject-grade"]}>
                <div className={classes["grade-final-wrap"]}>
                  {firstSemesterGrades.length === 0
                    ? "/"
                    : Math.round(averageGradeNumber(firstSemesterGrades))}{" "}
                  <span>({averageGradeNumber(firstSemesterGrades)})</span>
                </div>
              </div>
            </div>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-items-wrap"]}>
                <div className={classes["part"]}>II</div>
                <div className={classes["part-items"]}>
                  {secondSemesterGrades.map((grade, index) => (
                    <div key={index} className={classes["part-item"]}>
                      {grade.value}
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes["subject-grade"]}>
                <div className={classes["grade-final-wrap"]}>
                  {secondSemesterGrades.length === 0
                    ? "/"
                    : Math.round(averageGradeNumber(secondSemesterGrades))}{" "}
                  <span>({averageGradeNumber(secondSemesterGrades)})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
