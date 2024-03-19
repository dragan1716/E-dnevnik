import { useState, useEffect } from "react";
import classes from "./Activities.module.css";
import axios from "axios";
import ActivityCard from "../../Card/ActivityCard";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import { CustomSpinner } from "../../Spinners/CustomSpinner";

const Activities = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successfulCount, setSuccessfulCount] = useState(0);
  const [satisfactoryCount, setSatisfactoryCount] = useState(0);
  const [unatisfactoryCount, setUnsatisfactoryCount] = useState(0);

  const fetchGradesHandler = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/subjects`);
      setSubjectData((prevSubjectData) => [
        ...prevSubjectData,
        ...response.data,
      ]);
      setIsLoading(true);
      console.log(response);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchGradesHandler();
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const countGrades = () => {
    let successful = 0;
    let satisfactory = 0;
    let unsatisfactory = 0;

    subjectData.forEach((subject) => {
      subject.semesters.forEach((semester) => {
        semester.grades.forEach((grade) => {
          switch (grade.value) {
            case "uspjesan":
              successful++;
              break;
            case "zadovoljava":
              satisfactory++;
              break;
            case "ne_zadovoljava":
              unsatisfactory++;
              break;
            default:
              break;
          }
        });
      });
    });

    setSuccessfulCount(successful);
    setSatisfactoryCount(satisfactory);
    setUnsatisfactoryCount(unsatisfactory);
  };

  useEffect(() => {
    countGrades();
  }, [subjectData]);

  return (
    <Layout>
      <div className={classes["items-wrap"]}>
        <div className={classes["subjects-wrap"]}>
          {isLoading ? (
            <CustomSpinner />
          ) : (
            subjectData.map((subject, index) => (
              <div key={index}>
                <Link to={`/activities/${subject.subjectId}`}>
                  <ActivityCard
                    subject={subject}
                    onFetch={fetchGradesHandler}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
        <div className={classes["stats"]}>
          <div className={`${classes["stats-item"]} ${classes.good}`}>
            <div className={classes["stats-count"]}>
              <FaRegSmile className={classes["smile-first"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                uspješan({successfulCount})
              </div>
            </div>
          </div>

          <div className={`${classes["stats-item"]} ${classes.bad}`}>
            <div className={classes["stats-count"]}>
              <FaRegFaceMeh className={classes["smile-second"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                zadovoljava({satisfactoryCount})
              </div>
            </div>
          </div>

          <div className={`${classes["stats-item"]} ${classes.neutral}`}>
            <div className={classes["stats-count"]}>
              <FaRegFaceFrown className={classes["smile-third"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                ne zadovoljava({unatisfactoryCount})
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
