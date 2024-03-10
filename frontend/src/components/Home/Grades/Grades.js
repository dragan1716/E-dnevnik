import SubjectCard from "../../Card/SubjectCard";
import classes from "./Grades.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

//{onSubjectClick}
const Grades = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes["items-wrap"]}>
          {subjectData.map((subject) => (
            <div className={classes["subjects-wrap"]} key={subject._id}>
              <Link to={`/subject/${subject._id}`}>
                <SubjectCard subject={subject} onFetch={fetchGradesHandler} />
              </Link>
            </div>
          ))}
          <div className={classes["stats"]}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Grades;
