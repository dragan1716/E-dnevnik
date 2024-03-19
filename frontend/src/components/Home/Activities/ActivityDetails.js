import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import classes from "./ActivityDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceFrown } from "react-icons/fa6";

const ActivityDetails = () => {
  const { id } = useParams();
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubjectDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/v1/subjects/${id}`
      );
      setSubjectDetails(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjectDetails();
  }, [id]);
  console.log("subject details: ", subjectDetails);

  const firstSemesterGrades =
    subjectDetails && subjectDetails.semesters
      ? subjectDetails.semesters
          .find((semester) => semester.semesterType === "winter")
          ?.grades.filter((grade) => grade.type === "activity") || []
      : [];
  console.log("Prvi semestar: ", firstSemesterGrades);

  const secondSemesterGrades =
    subjectDetails && subjectDetails.semesters
      ? subjectDetails.semesters
          .find((semester) => semester.semesterType === "summer")
          ?.grades.filter((grade) => grade.type === "activity") || []
      : [];

  const renderIcon = (value) => {
    switch (value) {
      case "uspjesan":
        return <FaRegSmile className={classes["face-smile"]} />;
      case "zadovoljava":
        return <FaRegFaceMeh className={classes["face-meh"]} />;
      case "ne_zadovoljava":
        return <FaRegFaceFrown className={classes["face-frown"]} />;
      default:
        return null;
    }
  };

  const gradeTypeText = (grade) => {
    const gradeTypeDescription = {
      uspjesan: "Uspješan",
      zadovoljava: "Zadovoljava",
      ne_zadovoljava: "Ne zadovoljava",
    };
    return gradeTypeDescription[grade];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Dodajemo 1 jer mjeseci počinju od 0
    const year = date.getFullYear();

    return `${day}. ${month}. ${year}`;
  };

  return (
    <Layout>
      <div className={classes["items-subject-wrap"]}>
        <div className={classes["items"]}>
          <div className={classes["subject-name"]}>
            {subjectDetails.subjectName}
          </div>
          <div className={classes["items-content"]}>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-title"]}>1. Polugodište</div>
              <div className={classes["part-items"]}>
                <div className={classes["items-header"]}>
                  <div className={classes["grade-value"]}>Ocjena</div>
                  <div className={classes["grade-category"]}>Bilješka</div>
                  <div className={classes["grade-date"]}>Datum ocjene</div>
                </div>
                {firstSemesterGrades.map((grade) => (
                  <div className={classes["part-item"]} key={grade._id}>
                    <div className={classes["grade-value"]}>
                      <div className={classes["text"]}>
                        {renderIcon(grade.value)}
                      </div>
                      <div className={classes["icon"]}>
                        {gradeTypeText(grade.value)}
                      </div>
                    </div>
                    <div className={classes["grade-category"]}>
                      {grade.description}
                    </div>
                    <div className={classes["grade-date"]}>
                      {formatDate(grade.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-title"]}>2. Polugodište</div>
              <div className={classes["part-items"]}>
                <div className={classes["items-header"]}>
                  <div className={classes["grade-value"]}>Ocjena</div>
                  <div className={classes["grade-category"]}>Bilješka</div>
                  <div className={classes["grade-date"]}>Datum ocjene</div>
                </div>

                {secondSemesterGrades.map((grade) => (
                  <div className={classes["part-item"]} key={grade._id}>
                    <div className={classes["grade-value"]}>
                      <div className={classes["icon"]}>
                        {renderIcon(grade.value)}
                      </div>
                      <div className={classes["text"]}>
                        {gradeTypeText(grade.value)}
                      </div>
                    </div>
                    <div className={classes["grade-category"]}>
                      {grade.description}
                    </div>
                    <div className={classes["grade-date"]}>
                      {formatDate(grade.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityDetails;
