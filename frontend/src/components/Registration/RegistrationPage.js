import { useState, useEffect } from "react";
import { RegistrationForm } from "./RegistrationForm";
import classes from "./RegistrationPage.module.css";
import { CustomSpinner } from "../Spinners/CustomSpinner";

const RegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {isLoading ? <CustomSpinner /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default RegistrationPage;
