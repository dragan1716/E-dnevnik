import SubjectCard from "../../Card/SubjectCard";
import classes from "./Grades.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { CustomSpinner } from "../../Spinners/CustomSpinner";

const Grades = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGradesHandler = async () => {
    try {
      console.log("Fetching grades...");

      setIsLoading(true);
      const response = await axios.get(`http://localhost:3000/v1/subjects`);
      setSubjectData((prevSubjectData) => [
        ...prevSubjectData,
        ...response.data,
      ]);
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

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes["items-wrap"]}>
          {isLoading ? (
            <CustomSpinner />
          ) : (
            subjectData.map((subject) => (
              <div className={classes["subjects-wrap"]} key={subject.subjectId}>
                <Link to={`/subjects/${subject.subjectId}`}>
                  <SubjectCard subject={subject} onFetch={fetchGradesHandler} />
                </Link>
              </div>
            ))
          )}
          <div className={classes["stats"]}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Grades;
