import LoginCard from "./LoginCard";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default LoginPage;
