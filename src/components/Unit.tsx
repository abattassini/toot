//import "./Unit.scss";
import Juravis from "../assets/images/Juravis.gif";
import { Equipments } from "./Equipments";
import { EvadeStats } from "./EvadeStats";
import { GeneralStats } from "./GeneralStats";
import { Innates } from "./Innates";
import { Skills } from "./Skills";

import "./Unit.scss";

export const Unit = () => {
  return (
    <div className="unit">
      <div>
        <img src={Juravis} alt="Juravis Avatar" />
      </div>
      <div className="basic-info">
        <span>NameOfUnit</span>
        <span>Scorpio</span>
        <span>Juravis</span>
        <span>Champ Rate: 3.33%</span>
      </div>
      <GeneralStats />
      <EvadeStats />
      <Equipments />
      <Innates />
      <Skills />
    </div>
  );
};
