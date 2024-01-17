import Card from "../Card/Card";
import classes from "./Timeline.module.css";

const Timeline = () => {
  return (
    <div className={classes["main-content"]}>
      <div>
        <div className={classes["events"]}>
          <div className={classes["event"]}>
            <div className={classes["event-timeline"]}>
              {/*dodat sliku */}
              <div className={classes["event-date"]}>03. 02. 2024</div>
            </div>
            <div className={classes["event-data"]}>
              <Card></Card>
            </div>
          </div>
          <div className={classes["event"]}>
            <div className={classes["event-timeline"]}>
              {/*dodat sliku */}
              <div className={classes["event-date"]}>03. 02. 2024</div>
            </div>
            <div className={classes["event-data"]}>
              <Card></Card>
            </div>
          </div>
          <div className={classes["event"]}>
            <div className={classes["event-timeline"]}>
              {/*dodat sliku */}
              <div className={classes["event-date"]}>03. 02. 2024</div>
            </div>
            <div className={classes["event-data"]}>
              <Card></Card>
            </div>
          </div>
          <div className={classes["event"]}>
            <div className={classes["event-timeline"]}>
              {/*dodat sliku */}
              <div className={classes["event-date"]}>03. 02. 2024</div>
            </div>
            <div className={classes["event-data"]}>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
