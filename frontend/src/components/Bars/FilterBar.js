import classes from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <div className={classes["container"]}>
      <ul className={classes["filter-bar-list"]}>
        <li>Elektrotehnička škola Dragan Badnjar</li>
        <li>IV 4</li>
        <li>Svi predmeti</li>
      </ul>

      {/* Ovaj padajuci meni treba da filtrira, npr defaultno se prikazuje sve (izostanci, pohvale, ocjene itd), 
      a kad odaberemo ocjene, prikazi nam samo ocjene */}
      <ul></ul>
    </div>
  );
};

export default FilterBar;
