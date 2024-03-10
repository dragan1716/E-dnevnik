import classes from "./TimelineCard.module.css";

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

  return (
    <div>
      <div className={classes["container"]}>
        <div className={classes["wrapper"]} key={grade.id}>
          <div className={classes["left"]}>
            <div className={classes["grade"]}>{grade.value}</div>
          </div>
          <div className={classes["right"]}>
            <div className={classes["subject"]}>{grade.subject}</div>
            <div className={classes["final-grade"]}></div>{" "}
            <div className={classes["description"]}>
              {/*f-ja koja ispituje tekst(odlican, vrlodobar...), staticka helper metoda koja vraca vrijednost labele */}{" "}
              {gradeValueText(grade.value)} ({grade.value})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
