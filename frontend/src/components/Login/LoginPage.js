import { useEffect, useState } from "react";
import LoginCard from "./LoginCard";
import classes from "./LoginPage.module.css";
import { DefaultSpinner } from "../Spinners/LoadingSpinner";
import { CustomSpinner } from "../Spinners/CustomSpinner";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Nakon 2 sekunde postavljamo isLoading na false
    }, 500);

    return () => clearTimeout(timer); // Očistimo timer prilikom unmounta komponente
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={classes["spinner"]}>
          <CustomSpinner />
        </div>
      ) : (
        <div className={classes["container"]}>
          <div className={classes["login-wrap"]}>
            <div className={classes["login-wrap-left"]}>
              <div className={classes["title-wrap"]}>
                <h2>Moj</h2>
                <h1>e - Dnevnik</h1>
                <h2>portal za učenike i roditelje</h2>
              </div>
            </div>
            <div className={classes["login-wrap-right"]}>
              <LoginCard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
