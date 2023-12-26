import { RegistrationForm } from "./RegistrationForm";
import classes from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
