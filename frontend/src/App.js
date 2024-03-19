import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import GradeDetails from "./components/Home/Grades/GradeDetails";
import Grades from "./components/Home/Grades/Grades";
import Activities from "./components/Home/Activities/Activities";
import Timeline from "./components/Home/Timeline/Timeline";
import ActivityDetails from "./components/Home/Activities/ActivityDetails";
import AllSubjects from "./components/Home/Subjects/AllSubjects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subjects/:id" element={<GradeDetails />} />
        <Route path="/" element={<Timeline />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/courses" element={<AllSubjects />} />
      </Routes>
    </>
  );
}

export default App;
