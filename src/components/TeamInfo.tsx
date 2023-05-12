import "./TeamInfo.scss";

type TeamInfoProps = {
  color: "red" | "blue" | "black" | "white";
  status: "not-played" | "winner" | "loser";
};

export const TeamInfo = ({
  color = "black",
  status = "winner",
}: TeamInfoProps) => {
  return (
    <div
      className={`team-info team-info-color-${color} team-info-border-${status}`}
    >
      <span>Argelxd the Ninja</span>
      <span>DudeWithGiantName45 the Time Mage</span>
      <span>Yo the Bomb</span>
      <span>GoldRogerX the Goblin</span>
    </div>
  );
};
