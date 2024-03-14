import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import classes from "./GradeDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
//ugnijezditi sve da se salje sa apija, predmet, semestar, ocjena, typr-datum

const GradeDetails = () => {
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
      ? subjectDetails.semesters.find(
          (semester) => semester.semesterType === "winter"
        )?.grades || []
      : [];

  const secondSemesterGrades =
    subjectDetails && subjectDetails.semesters
      ? subjectDetails.semesters.find(
          (semester) => semester.semesterType === "summer"
        )?.grades || []
      : [];

  const gradeValueText = (grade) => {
    const gradeDescriptions = {
      5: "Odličan",
      4: "Vrlodobar",
      3: "Dobar",
      2: "Dovoljan",
      1: "Nedovoljan",
    };

    return gradeDescriptions[grade];
  };

  const gradeTypeText = (grade) => {
    const gradeTypeDescription = {
      kz: "Kontrolni zadatak",
      uo: "Usmeni odgovor",
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

  const averageGradeNumber = (grades) => {
    const empty = "/";
    if (grades.length === 0) {
      return empty.toString();
    } else {
      const total = grades.reduce((a, b) => a + parseInt(b.value), 0);
      const average = total / grades.length;
      return average.toFixed(2);
    }
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
                  <div className={classes["grade-category"]}>Vrsta</div>
                  <div className={classes["grade-date"]}>Datum ocjene</div>
                </div>
                {firstSemesterGrades.map((grade) => (
                  <div className={classes["part-item"]} key={grade._id}>
                    <div className={classes["grade-value"]}>
                      {gradeValueText(grade.value)} ({grade.value})
                    </div>
                    <div className={classes["grade-category"]}>
                      {gradeTypeText(grade.type)}
                    </div>
                    <div className={classes["grade-date"]}>
                      {formatDate(grade.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
              <div className={classes["grades-footer"]}>
                <div className={classes["grade-average"]}>
                  Srednja ocjena:{" "}
                  <span>{averageGradeNumber(firstSemesterGrades)}</span>
                </div>
                <div className={classes["grade-final"]}>
                  Zaključeno:{" "}
                  <span>
                    {gradeValueText(
                      Math.round(averageGradeNumber(firstSemesterGrades))
                    )}{" "}
                    (
                    {firstSemesterGrades.length === 0
                      ? "/"
                      : Math.round(averageGradeNumber(firstSemesterGrades))}
                    )
                  </span>
                </div>
              </div>
            </div>
            <div className={classes["schoolyear-part"]}>
              <div className={classes["part-title"]}>2. Polugodište</div>
              <div className={classes["part-items"]}>
                <div className={classes["items-header"]}>
                  <div className={classes["grade-value"]}>Ocjena</div>
                  <div className={classes["grade-category"]}>Vrsta</div>
                  <div className={classes["grade-date"]}>Datum ocjene</div>
                </div>

                {secondSemesterGrades.map((grade) => (
                  <div className={classes["part-item"]} key={grade._id}>
                    <div className={classes["grade-value"]}>
                      {gradeValueText(grade.value)} ({grade.value})
                    </div>
                    <div className={classes["grade-category"]}>
                      {gradeTypeText(grade.type)}
                    </div>
                    <div className={classes["grade-date"]}>
                      {formatDate(grade.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
              <div className={classes["grades-footer"]}>
                <div className={classes["grade-average"]}>
                  Srednja ocjena:{" "}
                  <span>{averageGradeNumber(secondSemesterGrades)}</span>
                </div>
                <div className={classes["grade-final"]}>
                  Zaključeno:{" "}
                  <span>
                    {gradeValueText(
                      Math.round(averageGradeNumber(secondSemesterGrades))
                    )}{" "}
                    (
                    {secondSemesterGrades.length === 0
                      ? "/"
                      : Math.round(averageGradeNumber(secondSemesterGrades))}
                    )
                  </span>
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
