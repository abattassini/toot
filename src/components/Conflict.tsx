import { TeamInfo } from "./TeamInfo";

import "./Conflict.scss";

type ConflictProps = {
  isVertical: boolean;
};

export const Conflict = ({ isVertical = true }: ConflictProps) => {
  return (
    <div className={`conflict${isVertical ? " vertical" : ""}`}>
      <span className="text"> Red vs. Blue </span>
      <span className="text"> 65 - Granary of Bethla Garrison </span>
      <div className="teams">
        <TeamInfo color="red" status="not-played" />
        <TeamInfo color="blue" status="not-played" />
      </div>
    </div>
  );
};
