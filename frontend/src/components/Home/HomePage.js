import Timeline from "./Timeline/Timeline";
import { useEffect, useState } from "react";
import { CustomSpinner } from "../Spinners/CustomSpinner";
import Grades from "./Grades/Grades";
import GradeDetails from "./Grades/GradeDetails";
import Activities from "./Activities/Activities";
import Layout from "../layout/Layout";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState("vremenska-linija");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubjectClick = (subjectId) => {
    setSelectedSubjectId(subjectId);
  };

  const renderComponent = () => {
    switch (activeNavItem) {
      case "vremenska-linija":
        return <Timeline />;
      case "ocjene":
        // return <Grades onSubjectClick={handleSubjectClick} />;
        return <Grades />;

      case "grade-details":
        return <GradeDetails subjectId={selectedSubjectId} />;
      case "aktivnosti":
        return <Activities />;
      default:
        return <Timeline />;
    }
  };

  return (
    <Layout>{loading ? <CustomSpinner /> : <>{renderComponent()}</>}</Layout>
  );
};

export default HomePage;
