import Layout from "../../layout/Layout";
import classes from "./GradeDetails.module.css";

const GradeDetails = () => {
  return (
    <Layout>
      <div className={classes["items-subject-wrap"]}>
        <div className={classes["items"]}>
          <div className={classes["subject-name"]}>Matematika</div>
          <div className={classes["items-content"]}>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-title"]}>1. Polugodište</div>
              <div className={classes["part-items"]}>
                <div className={classes["items-header"]}>
                  <div className={classes["grade-value"]}>Ocjena</div>
                  <div className={classes["grade-category"]}>Vrsta</div>
                  <div className={classes["grade-date"]}>Datum ocjene</div>
                </div>
                <div className={classes["part-item"]}>
                  <div className={classes["grade-value"]}>Odlican (5)</div>
                  <div className={classes["grade-category"]}>
                    usmeno odgovaranje
                  </div>
                  <div className={classes["grade-date"]}>27. 10. 2023</div>
                </div>
                <div className={classes["part-item"]}>
                  <div className={classes["grade-value"]}>Dobar (3)</div>
                  <div className={classes["grade-category"]}>
                    kontrolni zadatak
                  </div>
                  <div className={classes["grade-date"]}>17. 11. 2023</div>
                </div>
              </div>
              <div className={classes["grades-footer"]}>
                <div className={classes["grade-average"]}>
                  Srednja ocjena: <span>4.00</span>
                </div>
                <div className={classes["grade-final"]}>
                  Zaključeno: <span>odlican (5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GradeDetails;
