import fetchGradesHandler from "../../../libs/api/GradeApi";
import TimelineCard from "../../Card/TimelineCard";
import { DefaultSpinner } from "../../Spinners/LoadingSpinner";
import classes from "../Timeline/Timeline.module.css";
import { useState, useEffect, useRef } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Dodajemo 1 jer mjeseci počinju od 0
  const year = date.getFullYear();

  return `${day}. ${month}. ${year}`;
};

const Timeline = () => {
  const [grades, setGrades] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetchGradesHandler(page);
      setGrades((prevGrades) => [...prevGrades, ...data.grades]);
      setTotalPages(data.totalPages);
      setIsLoading(true);
    } catch (error) {
      console.log("Error fetching grades:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const loadMore = () => {
    setTimeout(() => {
      if (page < totalPages) {
        setPage((prevPage) => prevPage + 1);
        console.log("Loading more data");
      }
    }, 500);
  };

  const pageEnd = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && page < totalPages) {
        loadMore();
      }
    },
    { threshold: 1 }
  );

  useEffect(() => {
    console.log("Page: ", page);
    observer.observe(pageEnd.current);

    return () => observer.disconnect();
  }, [pageEnd, page, totalPages]);

  return (
    <div>
      <div>
        <div className={classes["events"]}>
          {grades.map((grade) => (
            <div className={classes["event"]} key={grade._id}>
              <div className={classes["event-timeline"]}>
                {/*dodat sliku */}
                <div className={classes["event-date"]}>
                  {formatDate(grade.createdAt)}
                </div>
              </div>
              <div className={classes["event-data"]}>
                <TimelineCard grade={grade} onFetch={fetchGradesHandler} />
              </div>
            </div>
          ))}

          <div className={classes["loading"]}>
            {isLoading && page < totalPages && <DefaultSpinner />}
          </div>
          {isLoading && page >= totalPages && (
            <div className={classes["container-circle"]}>
              <div className={`${classes.line} ${classes.left}`}></div>
              <div className={classes["circle"]}>Kraj</div>
              <div className={`${classes.line} ${classes.right}`}></div>
            </div>
          )}
          <div ref={pageEnd}></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
