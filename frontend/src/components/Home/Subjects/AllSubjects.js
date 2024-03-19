import Layout from "../../layout/Layout";
import classes from "./AllSubjects.module.css";

const AllSubjects = () => {
  return (
    <Layout>
      <div className={classes["courses-teachers-wrap"]}>
        <div className={classes["course-wrap"]}>
          <div className={classes["course-name"]}>naziv predmeta</div>
          <div className={classes["teachers"]}>
            <div className={classes["teacher"]}>
              <div className={classes["course-teacher-name"]}>
                ime profesora
              </div>
              <div className={classes["course-teacher-note"]}>
                <span className={classes["consultation-label"]}>
                  Konsultacije: dodati ako ih ima
                </span>
                {/* <p className={classes["consultation-paragraph"]}>
                  Ovdje dodati podatke ako ih ima
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllSubjects;
