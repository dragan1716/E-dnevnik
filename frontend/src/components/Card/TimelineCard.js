import classes from "./TimelineCard.module.css";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";

const Card = ({ grade }) => {
  const gradeValueText = (grade) => {
    const gradeDescriptions = {
      5: "Odlican",
      4: "Vrlodobar",
      3: "Dobar",
      2: "Dovoljan",
      1: "Nedovoljan",
    };

    return gradeDescriptions[grade];
  };

  const renderIcon = () => {
    if (grade.type === "activity") {
      if (grade.value === "uspjesan") {
        return <FaRegSmile className={classes["face-smile"]} />;
      } else if (grade.value === "zadovoljava") {
        return <FaRegFaceMeh className={classes["face-meh"]} />;
      } else if (grade.value === "ne_zadovoljava") {
        return <FaRegFaceFrown className={classes["face-frown"]} />;
      }
    }

    return null;
  };

  const renderDescriptionText = () => {
    if (grade.type === "activity") {
      if (grade.value === "uspjesan") {
        return "Uspješan";
      } else if (grade.value === "zadovoljava") {
        return "Zadovoljava";
      } else if (grade.value === "ne_zadovoljava") {
        return "Ne zadovoljava";
      }
    }

    return `${gradeValueText(grade.value)} (${grade.value})`;
  };

  return (
    <div>
      <div className={classes["container"]}>
        <div className={classes["wrapper"]} key={grade.id}>
          <div className={classes["left"]}>
            <div className={classes["grade"]}>
              {renderIcon()}
              {grade.type !== "activity" && `${grade.value}`}
            </div>
          </div>
          <div className={classes["right"]}>
            <div className={classes["subject"]}>{grade.subject}</div>
            <div className={classes["final-grade"]}></div>{" "}
            <div className={classes["description"]}>
              <div className={classes["description-grade"]}>
                {renderDescriptionText()}
              </div>
              <div>{grade.description && <p>{grade.description}</p>}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
