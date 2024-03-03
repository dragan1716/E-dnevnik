//import fetchGradesHandler from "../../../libs/api/GradeApi";
import SubjectCard from "../../Card/SubjectCard";
import classes from "./Grades.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Grades = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //  const fetchData = async () => {
  //   try {
  //     const data = await fetchGradesHandler(pageNumber);
  //     setSubjectData((prevSubjectData) => [...prevSubjectData, ...data]);
  //     setIsLoading(true);

  //     setTotalPages(data.totalPages);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const fetchGradesHandler = async (page, semesterId) => {
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
    //fetchData(pageNumber);
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
    <div className={classes.container}>
      <div className={classes["items-wrap"]}>
        {subjectData.map((subject, index) => (
          <div className={classes["subjects-wrap"]} key={index}>
            <Link to={`/subject/${subject.id}`}>
              <SubjectCard subject={subject} onFetch={fetchGradesHandler} />
            </Link>
          </div>
        ))}
        <div className={classes["stats"]}></div>
      </div>
      <div ref={pageEnd}></div>
    </div>
  );
};

export default Grades;
