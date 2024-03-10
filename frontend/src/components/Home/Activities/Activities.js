import { useState, useEffect, useRef } from "react";
import classes from "./Activities.module.css";
import axios from "axios";
import ActivityCard from "../../Card/ActivityCard";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";
import Layout from "../../layout/Layout";

const Activities = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGradesHandler = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/v1/subjects?page=${page}`
      );
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
    fetchGradesHandler(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const pageEnd = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && pageNumber < totalPages) {
        loadMore();
      }
    },
    { threshold: 1 }
  );

  useEffect(() => {
    observer.observe(pageEnd.current);

    return () => observer.disconnect();
  }, [pageEnd, pageNumber, totalPages]);

  return (
    <Layout>
      <div className={classes["items-wrap"]}>
        <div className={classes["subjects-wrap"]}>
          {subjectData.map((subject, index) => (
            <div key={index}>
              <ActivityCard subject={subject} onFetch={fetchGradesHandler} />
            </div>
          ))}
        </div>
        <div className={classes["stats"]}>
          <div className={`${classes["stats-item"]} ${classes.good}`}>
            <div className={classes["stats-count"]}>
              <FaRegSmile className={classes["smile-first"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                uspjesan(6)
              </div>
              <div className={classes["stats-percentage"]}>(100%)</div>
            </div>
          </div>

          <div className={`${classes["stats-item"]} ${classes.bad}`}>
            <div className={classes["stats-count"]}>
              <FaRegFaceMeh className={classes["smile-second"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                zadovoljava(0)
              </div>
              <div className={classes["stats-percentage"]}>(0%)</div>
            </div>
          </div>

          <div className={`${classes["stats-item"]} ${classes.neutral}`}>
            <div className={classes["stats-count"]}>
              <FaRegFaceFrown className={classes["smile-third"]} />
            </div>
            <div className={classes["stats-description"]}>
              <div className={classes["stats-description-top"]}>
                zadovoljava(0)
              </div>
              <div className={classes["stats-percentage"]}>(0%)</div>
            </div>
          </div>
        </div>
      </div>
      <div ref={pageEnd}></div>
    </Layout>
  );
};

export default Activities;
