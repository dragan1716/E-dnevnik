import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import GradeDetails from "./components/Home/Grades/GradeDetails";
import Grades from "./components/Home/Grades/Grades";
import Activities from "./components/Home/Activities/Activities";
import Timeline from "./components/Home/Timeline/Timeline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subject/:id" element={<GradeDetails />} />
        <Route path="/" element={<Timeline />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
