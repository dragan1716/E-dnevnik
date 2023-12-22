import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
