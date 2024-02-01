import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["left"]}>
          <div className={classes["grade"]}>5</div>
        </div>
        <div className={classes["right"]}>
          <div className={classes["subject"]}>Matematika</div>
          <div className={classes["final-grade"]}></div>{" "}
          {/*Ovaj div treba da se prikaze samo kad je ocjena zakljucna*/}
          <div className={classes["description"]}>Odlican (5)</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
