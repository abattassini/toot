import "./Team.scss";
import { Unit } from "./Unit";

export const Team = () => {
  return (
    <div className="team">
      <h2>Red Team</h2>
      <div className="team-units">
        <Unit />
        <Unit />
        <Unit />
        <Unit />
      </div>
    </div>
  );
};
