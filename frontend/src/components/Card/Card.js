import classes from "./Card.module.css";

const Card = ({ grade }) => {
  return (
    <div>
      <div className={classes["container"]}>
        <div className={classes["wrapper"]} key={grade.id}>
          <div className={classes["left"]}>
            <div className={classes["grade"]}>{grade.gradeNumber}</div>
          </div>
          <div className={classes["right"]}>
            <div className={classes["subject"]}>{grade.subjectName}</div>
            <div className={classes["final-grade"]}></div>{" "}
            <div className={classes["description"]}>
              {grade.gradeText} ({grade.gradeNumber})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
