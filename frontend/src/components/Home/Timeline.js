import Card from "../Card/Card";
import classes from "./Timeline.module.css";
import { useState, useEffect } from "react";

const Timeline = () => {
  const [grades, setGrades] = useState([]);

  const fetchGradesHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/v1/grades");
      const data = await response.json();
      setGrades(data.results);

      if (!response.ok) {
        console.log("Fetching grades error");
      }
      console.log(data);
      console.log(data.results[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchGradesHandler();
  }, []);

  return (
    <div className={classes["main-content"]}>
      <div>
        <div className={classes["events"]}>
          {grades.map((grade) => (
            <div className={classes["event"]} key={grade.id}>
              <div className={classes["event-timeline"]}>
                {/*dodat sliku */}
                <div className={classes["event-date"]}>01. 02. 2024</div>
              </div>
              <div className={classes["event-data"]}>
                <Card grade={grade} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
