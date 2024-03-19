import classes from "./ActivityCard.module.css";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";

const ActivityCard = ({ subject }) => {
  const renderIcon = (value) => {
    switch (value) {
      case "uspjesan":
        return <FaRegSmile className={classes["face-smile"]} />;
      case "zadovoljava":
        return <FaRegFaceMeh className={classes["face-meh"]} />;
      case "ne_zadovoljava":
        return <FaRegFaceFrown className={classes["face-frown"]} />;
      default:
        return null;
    }
  };

  const firstSemesterGrades = subject.semesters
    .find((semester) => semester.semesterType === "winter")
    .grades.filter(
      (grade) =>
        grade.type !== "usmeni_odgovor" && grade.type !== "kontrolni_zadatak"
    );

  const secondSemesterGrades = subject.semesters
    .find((semester) => semester.semesterType === "summer")
    .grades.filter(
      (grade) =>
        grade.type !== "usmeni_odgovor" && grade.type !== "kontrolni_zadatak"
    );

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
                  {renderIcon(grade.value)}
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
                  {renderIcon(grade.value)}
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
