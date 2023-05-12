import { Conflict } from "./Conflict";

import "./TournamentBrackets.scss";

export const TournamentBrackets = () => {
  return (
    <div className="tournament-brackets">
      <section className="brackets-section qualifiers">
        <h3>Quarter-Finals</h3>
        <Conflict isVertical={false} />
        <Conflict isVertical={false} />
        <Conflict isVertical={false} />
        <Conflict isVertical={false} />
      </section>
      <section className="brackets-section semifinals">
        <h3>Semi-Finals</h3>
        <Conflict isVertical={true} />
        <Conflict isVertical={true} />
      </section>
      <section className="brackets-section finals">
        <h3>Finals</h3>
        <Conflict isVertical={true} />
      </section>
      <section className="brackets-section champion-battle">
        <h3>Champion Battle</h3>
        <Conflict isVertical={true} />
      </section>
    </div>
  );
};
