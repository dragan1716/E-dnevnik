import classes from "./ActivityCard.module.css";

const ActivityCard = ({ subject }) => {
  const firstSemesterGrades = [];
  const secondSemesterGrades = [];

  subject.grades.forEach((grade, index) => {
    if (subject.semesterId[index] === subject.semesterId[0]) {
      firstSemesterGrades.push(grade);
    } else {
      secondSemesterGrades.push(grade);
    }
  });

  return (
    <div className={classes.items} key={subject._id}>
      <div className={classes["subject-name"]}>{subject.subjectName}</div>
      <div className={classes["items-content"]}>
        <div className={classes["schoolyear-part"]}>
          <div className={classes["part-items-wrap"]}>
            <div className={classes["part"]}>I</div>
            <div className={classes["part-items"]}>
              {firstSemesterGrades.map((grade, index) => (
                <div key={index} className={classes["part-item"]}>
                  {grade}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes["schoolyear-part"]}>
          <div className={classes["part-items-wrap"]}>
            <div className={classes["part"]}>II</div>
            <div className={classes["part-items"]}>
              {secondSemesterGrades.map((grade, index) => (
                <div key={index} className={classes["part-item"]}>
                  {grade}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
